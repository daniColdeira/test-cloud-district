import React from 'react';
import InfoGoogle from './components/InfoGoogle';
import ListUsers from './components/ListUsers'
import UserForm from './components/UserForm';
import { AppHeader, WrapperUsers, FlexDiv, TitleUsers} from './styled';


function App() {
  
  return (
    <div>
      <AppHeader>
        <InfoGoogle />
        <FlexDiv>
            <TitleUsers>Lista Usuarios</TitleUsers>
            <WrapperUsers>
                <ListUsers />
                <UserForm />
            </WrapperUsers>
        </FlexDiv>
      </AppHeader>
    </div>
  );
}

export default App;
