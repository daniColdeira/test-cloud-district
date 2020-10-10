import styled, { keyframes } from 'styled-components'

export const WrapperLogin = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(146, 160, 166, 0.2);
`
const rotate = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & > div {
    position: absolute;
    border: 4px solid red;
    opacity: 1;
    border-radius: 50%;
    animation: ${rotate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & > div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  
`

export const LoginName = styled.span`
  font-weight: 600;
  font-size: 1.5vw;
  @media (max-width: 960px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 11px;
  }
`

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginTitle = styled.div`
  font-weight: 600;
  font-size: 2.5vw;
  color: #282c34;
  @media (max-width: 600px) {
    font-size: 11px;
  }
`

  export const LoginDiv = styled.div`
  display: flex;
  color: blue;
  justify-content: center;
  align-items: center;
  width: 50vw;
  border: 2px solid #62696C;
    border-radius: 10px;
    padding: 40px 80px;
  margin: 150px 100px;
  background-color: white;
  @media (max-width: 600px) {
    padding: 40px 50px;
  }
 
`

export const LoginSocial = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;   
  margin: ${props => props.margin || "0"};
  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  color: #282c34;
  font-size: 1em;
  margin: 1em;
  padding: 0.50em 1em;
  border: 3px solid #282c34;
  border-radius: 3px;
  display: block;
  cursor: pointer;
  min-width: 105px;
  &:hover {
    color: #40D8E1;
    border: 3px solid #40D8E1;
  }
`;

