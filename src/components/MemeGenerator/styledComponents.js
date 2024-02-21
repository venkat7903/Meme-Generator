// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  padding: 20px 0px;
`
export const MainHeading = styled.h1`
  color: #35469c;
  font-weight: bold;
`

export const MemeGenerateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1140px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.imgUrl});
  width: 90%;
  height: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 1px;
  @media (min-width: 768px) {
    width: 48%;
    order: 1;
  }
`

export const MemeDesc = styled.p`
  color: #fff;
  font-size: ${props => props.fontSize};
  font-weight: 600;
  text-align: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1140px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 48%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0px;
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 7px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  padding: 0px 12px;
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  margin-top: 7px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  padding: 0px 12px;
`

export const GenerateButton = styled.button`
  align-self: flex-start;
  background: #0b69ff;
  color: #fff;
  height: 40px;
  border: none;
  width: 130px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
`
