import React, { useContext } from 'react';
import Logout from '../../GoogleLogout';
import { InfoGoogle, DivGoogle } from '../styled';
import { AuthContext } from '../../../AuthContext/AuthContext.js';

function Info(props) {
    const { user } = useContext(AuthContext);
    
    return (
        <InfoGoogle>
            <img src={user.user.profileObj && user.user.profileObj.imageUrl} alt="logo" />
            <DivGoogle>
                <div>
                    {user.user.profileObj && user.user.profileObj.name}
                </div>
                <div>
                    {user.user.profileObj && user.user.profileObj.email}
                </div>
            </DivGoogle>
            <Logout />
        </InfoGoogle>
    );
}

export default Info;
