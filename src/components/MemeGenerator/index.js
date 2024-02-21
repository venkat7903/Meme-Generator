import {Component} from 'react'
import {
  MainContainer,
  MainHeading,
  MemeGenerateContainer,
  MemeContainer,
  MemeDesc,
  FormContainer,
  InputContainer,
  Label,
  Input,
  Select,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    fontSize: '',
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    imgUrlInput: '',
    topTextInp: '',
    bottomTextInp: '',
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onChangeImgUrl = event => {
    this.setState({imgUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInp: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInp: event.target.value})
  }

  onGenerateBtn = event => {
    event.preventDefault()
    const {imgUrlInput, topTextInp, bottomTextInp, fontSizeInput} = this.state

    this.setState({
      imgUrl: imgUrlInput,
      topText: topTextInp,
      bottomText: bottomTextInp,
      fontSize: fontSizeInput,
    })
  }

  renderMeme = () => {
    const {topText, bottomText, imgUrl, fontSize} = this.state
    return (
      <MemeContainer imgUrl={imgUrl} data-testid="meme">
        <MemeDesc fontSize={`${fontSize}px`}>{topText}</MemeDesc>
        <MemeDesc fontSize={`${fontSize}px`}>{bottomText}</MemeDesc>
      </MemeContainer>
    )
  }

  render() {
    const {fontSizeInput, imgUrlInput, topTextInp, bottomTextInp} = this.state
    return (
      <MainContainer>
        <MainHeading>Meme Generator</MainHeading>
        <MemeGenerateContainer>
          {this.renderMeme()}
          <FormContainer onSubmit={this.onGenerateBtn}>
            <InputContainer>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                type="text"
                id="imageUrl"
                onChange={this.onChangeImgUrl}
                value={imgUrlInput}
                placeholder="Enter Image Url"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="topText">Top Text</Label>
              <Input
                type="text"
                id="topText"
                onChange={this.onChangeTopText}
                value={topTextInp}
                placeholder="Enter Top Text"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="bottomText">Bottom Text</Label>
              <Input
                type="text"
                id="bottomText"
                onChange={this.onChangeBottomText}
                value={bottomTextInp}
                placeholder="Enter Bottom Text"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                id="fontSize"
                value={fontSizeInput}
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </Select>
            </InputContainer>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </MemeGenerateContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
