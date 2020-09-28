import React, {useContext} from 'react';
import { store } from '../../../store/store.js';
import Logout from '../../GoogleLogout';
import { InfoGoogle, DivGoogle } from '../styled';

function Info() {
    const globalState = useContext(store);
    
    return (
        <InfoGoogle>
            <img src={globalState.state.user.profileObj && globalState.state.user.profileObj.imageUrl} alt="logo" />
            <DivGoogle>
                <div>
                    {globalState.state.user.profileObj && globalState.state.user.profileObj.name}
                </div>
                <div>
                    {globalState.state.user.profileObj && globalState.state.user.profileObj.email}
                </div>
            </DivGoogle>
            <Logout />
        </InfoGoogle>
    );
}

export default Info;