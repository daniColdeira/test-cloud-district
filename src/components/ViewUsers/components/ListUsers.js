import React, {useEffect, useState } from 'react';
import axios from "axios";
import { Link, ListUsers, PagLink, FlexUser, FlexPointer, InfoUser, Margin15, MinWidth} from '../styled';

function GoogleLogout() {
    const [users, setUsers] = useState([]);
    const[user, setUser] = useState(null);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        getUsers(1);
      }, []);

    const getUsers = (page) => {
        axios.get("https://reqres.in/api/users?page=" + page + "&per_page=5").then(response => {
          console.log(response.data, 'Data', response.data.data)
          setUsers(response.data)
        })
      }
    
      const getUser = (id) => {
        axios.get("https://reqres.in/api/users/" + id).then(response => {
          console.log(response.data, 'Data', response.data.data)
          setUser(response.data)
        })
      }

      const drawPagination = () => {
        let paginations = [];
        for(let i = 1; i <= users.total_pages; i++){
          let pag =  <div>
              <PagLink onClick={() => getUsers(i)}>{i}</PagLink>
          </div>
          paginations.push(pag)
        }
        return paginations;
    }

    return (
        <>
          <ListUsers>
            {
              users.data && users.data.map((user) => 
                  <Link onClick={() => getUser(user.id)}><MinWidth>{user.email}</MinWidth></Link>
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
          <FlexUser>
            {
              user &&
                <InfoUser>
                  <div>
                    {`Email: ${user.data.email}`}
                  </div>
                  <Margin15>
                    {`Nombre: ${user.data.first_name} ${user.data.last_name}`}
                  </Margin15>
                  <img src={user.data.avatar} alt="avatar" />
                </InfoUser>
              }
          </FlexUser>
        </>
    );
}

export default GoogleLogout;