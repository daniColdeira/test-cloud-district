import styled from 'styled-components'

export const WrapperLogin = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(146, 160, 166, 0.2);
`

export const LoginName = styled.span`
  font-weight: 600;
  font-size: 1.5vw;
  @media (max-width: 960px) {
    font-size: 2vw;
  }
`

export const LoginTitle = styled.div`
  font-weight: 600;
  font-size: 2.5vw;
  color: #282c34;
`

  export const LoginDiv = styled.div`
  display: flex;
  color: blue;
  justify-content: center;
  align-items: center;
  width: 50vw;
  border: 1px solid #62696C;
    border-radius: 10px;
    padding: 40px 80px;
  margin: 150px 100px;
  background-color: white;
 
`

export const LoginSocial = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;   
  margin: ${props => props.margin || "0"};
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

