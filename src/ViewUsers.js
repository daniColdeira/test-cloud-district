import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { store } from './store.js';
import logo from './logo.svg';
import './App.css';
import Logout from './GoogleLogout';
import { Input, Button, Link, AppHeader, InfoGoogle, ListUsers} from './styled';


function App() {
  const [users, setUsers] = useState([]);
  const[user, setUser] = useState(null);
  const[openForm, setOpenForm] = useState({ open:false, type: ''});
  const[newUser, setNewUser]  = useState({ name:'', job:'', id: 0})
  const globalState = useContext(store);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    getUsers(1);
  }, []);

  
  
  const ExampleComponent = () => {
    const globalState = useContext(store);
    console.log('Holas', globalState.state); // this will return { color: red }
  };

  const ExampleDispatch = () => {
    
    const { dispatch } = globalState;
  
    dispatch({ type: 'action description' })
  };

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

  const createUsers = () => {
    axios.post("https://reqres.in/api/users/", newUser).then(response => {
      console.log(response.data, 'Data', response.data.data)
    })
  }

  const updateUsers = (id) => {
      setOpenForm(false);
      axios.patch("https://reqres.in/api/users/"+ id, newUser).then(response => {
        console.log(response.data, 'Data', response.data.data)
        getUsers();
      })
  }

  const drawPagination = () => {
      let paginations = [];
      for(let i = 1; i <= users.total_pages; i++){
        let pag =  <div>
            <div style={{ padding: '5px'}} onClick={() => getUsers(i)}>{i}</div>
        </div>
        paginations.push(pag)
      }
      return paginations;
  }


  return (
    <div className="App">
      {ExampleComponent()}
      <AppHeader>
        <InfoGoogle>
            <img src={globalState.state.user.profileObj && globalState.state.user.profileObj.imageUrl} alt="logo" />
            <div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px'}}>
                <div>
                    {globalState.state.user.profileObj && globalState.state.user.profileObj.name}
                </div>
                <div>
                    {globalState.state.user.profileObj && globalState.state.user.profileObj.email}
                </div>
            </div>
            <Logout />
        </InfoGoogle>
        <div style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{ margin:'30px 0'}}>Lista Usuarios</div>
            <div style={{ display:'flex' ,width: '60vw', justifyContent: 'space-between'}}>
            <ListUsers>
              
                {
                users.data && users.data.map((user) => 
                    <Link onClick={() => getUser(user.id)}>{user.email}</Link>
                )
                } 
                <div style={{ display:'flex', cursor:'pointer'}}>
                    {
                        drawPagination().map((pag) => {
                            return <>{pag}</>
                        })
                    }
                </div>
            </ListUsers>
            <div style={{ display:'flex', justifyContent:'space-around' ,flexDirection: 'column'}} >
            {
                user &&
                    <div > 
                        <div>
                            <div>
                              {user.data.email}
                            </div>
                            <div style={{ margin: '15px 0'}}>
                              {`${user.data.first_name} ${user.data.last_name}`}
                            </div>
                            <img src={user.data.avatar} alt="avatar" />
                        </div>
                    </div>
                }
                </div>
            {
                    !openForm.open &&
                    <div style={{ display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                      <Button onClick={() => setOpenForm({ open: true, type: 'updated'})}>Updated</Button>
                      <div>---- o ----</div>
                      <Button onClick={() => setOpenForm({ open: true, type: 'created'})}>Crear</Button>
                    </div>
            }
              
              {
                    openForm.open &&
                    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <div style={{ display: 'flex'}} >
                            <div style={{ display: 'flex', flexDirection:'column'}}> 
                              <span>Nombre</span>
                              <Input onChange={(event) => setNewUser({ ...newUser, name: event.target.value})}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection:'column'}}>
                              <span>Puesto</span>
                              <Input onChange={(event) => setNewUser({ ...newUser, job: event.target.value})}/>
                            </div>
                        </div>
                        {
                          openForm.type ==='updated' &&
                            <div style={{ display: 'flex', flexDirection:'column'}}>
                              <span>Id</span>
                              <Input onChange={(event) => setNewUser({ ...newUser, id: event.target.value})}/>
                            </div>
                        }
                          <div style={{ display:'flex'}}>
                          <Button onClick={() => setOpenForm(false)}>Cancelar</Button>
                        {
                          openForm.type==='updated' ?
                          <Button onClick={() => updateUsers(openForm.id)}>Updated</Button>
                          :
                          <Button onClick={() => createUsers()}>Crear</Button>
                        }
                        </div>
                        
                    </div>
                }
            
            
            </div>
        </div>
      </AppHeader>
    </div>
  );
}

export default App;
