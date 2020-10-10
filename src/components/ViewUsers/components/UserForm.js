import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from './LoadingSpinner';
import { createUser, updateUser } from '../../../redux/actions/userFunctions'
import { Input, Button, CloseIcon, UsersDiv, FlexDiv, FlexColumn, UserForm, Flex, Margin15, Bold, MarginTop} from '../styled';

function UserForms(props) {
    const[successUser, setSuccessUser] = useState({ open:false, data:{}});
    const[openForm, setOpenForm] = useState({ open:false, type: ''});
    const[newUser, setNewUser]  = useState({ name:'', job:'', id: 0})
    const { response, loading } = useSelector(state => ({
      response: state.users.response,
      loading: state.users.loadingResponse
    }));
    const dispatch = useDispatch();

    useEffect(() => {
      if(response){
        setOpenForm(false)
        setSuccessUser({ open: true })
      }  
    }, [response]);
    
    const closeInfo = () => {
      setOpenForm(false)
      setSuccessUser({...successUser , open: false})
    }

    return (
        <MarginTop>
        {
            !openForm.open &&  !successUser.open && 
            <UsersDiv minWidth={'390px'} >
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
                  <Bold>ID</Bold>{`: ${response.data.id}`}
                </div>
                <Margin15>
                  <><Bold>Puesto</Bold>{`: ${response.data.job}`} <Bold>Nombre</Bold>{`: ${response.data.name}`}</>
                </Margin15>
                <div>
                  { response.type === 'created' ?
                    <><Bold>Fecha de creación</Bold>: {new Date(response.data.createdAt).toString()}</>
                    :
                    <><Bold>Fecha de actualización</Bold>: {new Date(response.data.updatedAt).toString()}</>
                  }
                </div>
              </UserForm>
            </UsersDiv>
        }
        {
          openForm.open && !loading && 
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
                      <Input type="number" onChange={(event) => setNewUser({ ...newUser, id: event.target.value})}/>
                    </FlexColumn>
                }
                  <Flex>
                  <Button color={"#BF350A"} onClick={() => setOpenForm(false)}>Cancelar</Button>
                {
                  openForm.type==='updated' ?
                  <Button onClick={() => dispatch(updateUser(newUser))}>Updated</Button>
                  :
                  <Button onClick={() => dispatch(createUser(newUser))}>Crear</Button>
                }
                </Flex>
                
            </FlexDiv>
        }
        {
          loading &&
            <LoadingSpinner />

        }
        </MarginTop>
    );
}

export default UserForms;
