import React from 'react';
import InfoGoogle from './components/InfoGoogle';
import ListUsers from './components/ListUsers'
import UserForm from './components/UserForm';
import Error from './components/Error';
import { Users, WrapperUsers, FlexDiv, TitleUsers} from './styled';

function App(props) {
  return (
    <div>
      <Users>
        <InfoGoogle />
        <FlexDiv>
            <TitleUsers>Lista Usuarios</TitleUsers>
            <WrapperUsers>
                <ListUsers />
                <UserForm />
            </WrapperUsers>
        </FlexDiv>
        <Error />
      </Users>
    </div>
  );
}

export default App;
