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
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#282c34"};
  background: rgb(146, 160, 166, 0.2);
  border: none;
  border-radius: 3px;
`;

export const Link = styled.div`
  cursor: pointer;
  padding: 10px 20px 20px;
  min-width:calc(100% - 40px);
  &:hover {
    background-color: #92A0A6; // <Thing> when hovered
    color: white;
  }
  border-bottom: 1px solid #282c34;
  
`

export const LoginDiv = styled.div`
  display: flex;
  color: blue;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 50vw;
  border: 1px solid #62696C;
    border-radius: 10px;
    padding: 40px 80px;
  margin: 150px 100px;
  background-color: white;
 
`

export const WrapperLogin = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(146, 160, 166, 0.2);
 
 
`

export const LoginTitle = styled.div`
  font-weight: 600;
  font-size: 2em;
  color: #282c34;
`

export const AppHeader = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 1vmin);
    color: #282c34;
`

export const InfoGoogle = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    border: 2px solid #62696C;
    border-radius: 10px;
    padding: 40px 80px;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
-moz-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
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
    padding: 5px 0;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
-moz-box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
box-shadow: 5px 4px 5px 0px rgba(98,105,108,1);
`