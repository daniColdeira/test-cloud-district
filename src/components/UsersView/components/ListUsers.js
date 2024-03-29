import React, {useEffect, useState } from 'react';
import { getUsers, getUser } from '../../../redux/actions/userFunctions'
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from './LoadingSpinner';
import { DivList, Link, ListUsers, PagLink, FlexUser, FlexPointer, InfoUser, Margin15, MinWidth, Bold, Close} from '../styled';

function Users(props) {
    const[openUser, setOpenUser] = useState(false);
    const { users, user, loading } = useSelector(state => ({
      users: state.users.users,
      user: state.users.user,
      loading: state.users.loadingUser,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
      // Obtiene la primera página de la lista de usuarios 
      dispatch(getUsers(1));
    }, [dispatch]);

    useEffect(() => {
      if(user){
        setOpenUser(true);
      }      
    }, [user]);

    

    const drawPagination = () => {
      let paginations = [];
      for(let i = 1; i <= users.total_pages; i++){
        let pag =  <div>
            <PagLink onClick={() => dispatch(getUsers(i))}>{i}</PagLink>
        </div>
        paginations.push(pag)
      }
      return paginations;
    }

    const closeInfo = () => {
      setOpenUser(null)
    }

    return (
        <DivList>
          <ListUsers>
            {
              users.data && users.data.map((user) => 
                  <Link onClick={() => dispatch(getUser(user.id))}><MinWidth>{user.email}</MinWidth></Link>
              )
            } 
            <FlexPointer>
              {
                drawPagination().map((pag) => {
                    return <>{pag}</>
                })
              }
            </FlexPointer>
          </ListUsers>
          
            {
              user && openUser && 
              <FlexUser>
                {
                  !loading ?
                  <InfoUser>
                    <div>
                      <Bold>Email</Bold>{`: ${user.data.email}`}
                    </div>
                    <Margin15>
                      <Bold>Nombre</Bold>{`: ${user.data.first_name} ${user.data.last_name}`}
                    </Margin15>
                    <img src={user.data.avatar} alt="avatar" />
                    <Close onClick={closeInfo}>Cerrar</Close>
                  </InfoUser>
                  :
                  <LoadingSpinner />
                }
              </FlexUser>
            }
        </DivList>
    );
}

export default Users;
