import React, { useState } from 'react';
import axios from "axios";
import { Input, Button, CloseIcon, UsersDiv, FlexDiv, FlexColumn, UserForm, Flex, Margin15, Bold, MarginTop} from '../styled';

function GoogleLogout() {
    const[successUser, setSuccessUser] = useState({ open:false, data:{}});
    const[openForm, setOpenForm] = useState({ open:false, type: ''});
    const[newUser, setNewUser]  = useState({ name:'', job:'', id: 0})
    
    const createUsers = () => {
        axios.post("https://reqres.in/api/users/", newUser).then(response => {
          setOpenForm(false)
          setSuccessUser({ open: true, data:response.data, type:'created'})
        })
      }
    
      const updateUsers = () => {
          axios.patch("https://reqres.in/api/users/"+ newUser.id, newUser).then(response => {
            setOpenForm(false)
            setSuccessUser({ open: true, data:response.data, type:'updated'})
          })
      }
    
      const closeInfo = () => {
        setOpenForm(false)
        setSuccessUser({...successUser , open: false})
      }

    return (
        <MarginTop>
        {
            !openForm.open &&  !successUser.open && 
            <UsersDiv>
              <Button onClick={() => setOpenForm({ open: true, type: 'updated'})}>Updated</Button>
              <div>---- o ----</div>
              <Button onClick={() => setOpenForm({ open: true, type: 'created'})}>Crear</Button>
            </UsersDiv>
    }
    {
            successUser.open &&
            
            <UsersDiv border={'2px solid #62696C'} radius={"20px"} shadow={"5px 4px 5px 0px rgba(98,105,108,1)"}>
              <UserForm> 
                <CloseIcon onClick={closeInfo}>X</CloseIcon>
                <div>
                  <Bold>ID</Bold>{`: ${successUser.data.id}`}
                </div>
                <Margin15>
                  <><Bold>Puesto</Bold>{`: ${successUser.data.job}`} <Bold>Nombre</Bold>{`: ${successUser.data.name}`}</>
                </Margin15>
                <div>{ successUser.type === 'created' ?
                  <><Bold>Fecha de creación</Bold>: {new Date(successUser.data.createdAt).toString()}</>
                :
                <><Bold>Fecha de actualización</Bold>: {new Date(successUser.data.updatedAt).toString()}</>
                }</div>
              </UserForm>
              
            </UsersDiv>
    }
      
      {
            openForm.open &&
            <FlexDiv border={'2px solid #62696C'} radius={"20px"} shadow={"5px 4px 5px 0px rgba(98,105,108,1)"}>
                <Flex>
                    <FlexColumn> 
                      <Bold>Nombre</Bold>
                      <Input onChange={(event) => setNewUser({ ...newUser, name: event.target.value})}/>
                    </FlexColumn>
                    <FlexColumn>
                      <Bold>Puesto</Bold>
                      <Input onChange={(event) => setNewUser({ ...newUser, job: event.target.value})}/>
                    </FlexColumn>
                </Flex>
                {
                  openForm.type ==='updated' &&
                    <FlexColumn>
                      <Bold>Id</Bold>
                      <Input onChange={(event) => setNewUser({ ...newUser, id: event.target.value})}/>
                    </FlexColumn>
                }
                  <Flex>
                  <Button onClick={() => setOpenForm(false)}>Cancelar</Button>
                {
                  openForm.type==='updated' ?
                  <Button onClick={() => updateUsers()}>Updated</Button>
                  :
                  <Button onClick={() => createUsers()}>Crear</Button>
                }
                </Flex>
                
            </FlexDiv>
        }
        </MarginTop>
    );
}

export default GoogleLogout;