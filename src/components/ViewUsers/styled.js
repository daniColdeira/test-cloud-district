import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  color: #282c34;
  font-size: 1em;
  margin: 1em;
  padding: 0.50em 1em;
  border: 2px solid #282c34;
  border-radius: 3px;
  display: block;
  cursor: pointer;
  min-width: 105px;
  &:hover {
    border: 2px solid  ${props => props.color || "#40D8E1"};
    color: ${props => props.color || "#40D8E1"};
  } 
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#282c34"};
  background: rgb(146, 160, 166, 0.2);
  border: none;
  border-radius: 3px;
`;

export const LoginSocial = styled.input`
  display: flex; 
  flex-direction: column; 
  justifyContent: center; 
  alignItems: center;   
  margin: ${props => props.inputColor || "0"};
  
`;

export const Bold = styled.span`
  font-weight: 600;
`

export const Link = styled.div`
  cursor: pointer;
  padding: 10px 20px 20px;
  min-width:calc(100% - 40px);
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #92A0A6; // <Thing> when hovered
    color: white;
  }
  border-bottom: 1px solid #282c34;
  
`

export const MinWidth = styled.div`
  width: min-content;
`

export const CloseIcon = styled.div`
  cursor: pointer;
  padding: 5px;
  width: min-content;
  position: relative;
  left: 90%;
  &:hover {
    color: red;
  }
`

export const Close = styled.div`
  cursor: pointer;
  padding: 5px;
  width: min-content;
  &:hover {
    color: red;
  }
`

export const WrapperUsers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 60vw;
  max-width: 80vw;
  min-height: 370px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ErrDiv = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: #282c34;
`

export const Users = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 1vmin);
    color: #282c34;
    padding-top: 25px;
`

export const InfoGoogle = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
    border: 2px solid #62696C;
    border-radius: 10px;
    padding: 3% 6%;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
    -moz-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
    box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
    @media (max-width: 600px) {
      padding: 10px 5px;
      font-size: 10px;
      flex-direction: column;
    }

`

export const ListUsers = styled.div`
    margin: 0 50px;
    display: flex;
    height: min-content;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: calc(10px + 1.3vmin);
    border: 2px solid #62696C;
    border-radius: 10px;
    min-width: 310px;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
    -moz-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
    box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
    @media (max-width: 960px) {
      margin-bottom: 30px;
    }
    @media (max-width: 500px) {
      min-width: 0;
    }
`

export const FlexUser= styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-width: 306px; 
  align-items: center;   
`  

export const UsersDiv = styled.div `
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30%;
  padding: 20px;
  border-radius: ${props => props.radius || "0"};
  border: ${props => props.border || ""};
  -webkit-box-shadow: ${props => props.shadow || ""};
  -moz-box-shadow: ${props => props.shadow || ""};
  box-shadow: ${props => props.shadow || ""};
  min-width: ${props => props.minWidth || 0};
  width:30vw;
  @media (max-width: 960px) {
    width: auto;
  }
`

export const FlexPointer = styled.div `
  display: flex; 
  cursor: pointer;
`

export const Flex = styled.div `
  display: flex; 
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Margin15 = styled.div`
  margin: 15px 0;
`

export const MarginTop = styled.div`
  margin-top: 30px;
  width: 30vw;
  @media (max-width: 960px) {
    width: auto;
  }
`

export const DivGoogle = styled.div`
  display: flex; 
  flex-direction: column; 
  margin: 0 20px;
  @media (max-width: 600px) {
    padding: 5px 20px;
    font-size: 10px;
    flex-direction: column;
    margin: 10px 0 0;
  }
`

export const TitleUsers = styled.div`
  font-weight: 600;
  margin: 30px 0;
  font-size: 18px;
`

export const InfoUser = styled.div`
  width: max-content;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  min-width: 306px;
`
export const UserForm = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: min-content;
  padding: 20px;
`

export const PagLink = styled.div`
  cursor: pointer;
  padding: 10px 20px 20px;
  min-width:calc(100% - 40px);
  &:hover {
    background-color: #92A0A6; // <Thing> when hovered
    color: white;
  }
`  

export const FlexDiv= styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: ${props => props.border || ""};
  border-radius: ${props => props.radius || 0};
  -webkit-box-shadow: ${props => props.shadow || ""};
  -moz-box-shadow: ${props => props.shadow || ""};
  box-shadow: ${props => props.shadow || ""};
`  

export const FlexColumn= styled.div`
  display: flex; 
  flex-direction: column; 
  
`  