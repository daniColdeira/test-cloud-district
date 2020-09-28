import React, { useState } from 'react';
import axios from "axios";
import { Input, Button, CloseIcon, UsersDiv, FlexDiv, FlexColumn, UserForm, Flex, Margin15} from '../styled';

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
        <>
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
            
            <UsersDiv>
              <UserForm> 
                <CloseIcon onClick={closeInfo}>X</CloseIcon>
                <div>
                  {`ID: ${successUser.data.id}`}
                </div>
                <Margin15>
                  {`Puesto: ${successUser.data.job} Nombre: ${successUser.data.name}`}
                </Margin15>
                <div>{ successUser.type === 'created' ?
                `Fecha de creación: ${new Date(successUser.data.createdAt).toString()}`
                :
                `Fecha de actualización: ${new Date(successUser.data.updatedAt).toString()}`
                }</div>
              </UserForm>
              
            </UsersDiv>
    }
      
      {
            openForm.open &&
            <FlexDiv>
                <Flex>
                    <FlexColumn> 
                      <span>Nombre</span>
                      <Input onChange={(event) => setNewUser({ ...newUser, name: event.target.value})}/>
                    </FlexColumn>
                    <FlexColumn>
                      <span>Puesto</span>
                      <Input onChange={(event) => setNewUser({ ...newUser, job: event.target.value})}/>
                    </FlexColumn>
                </Flex>
                {
                  openForm.type ==='updated' &&
                    <FlexColumn>
                      <span>Id</span>
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
        </>
    );
}

export default GoogleLogout;