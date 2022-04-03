import { useState } from 'react';
import AuthContext from './auth-context';

const AuthProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

const authContext = {
    token: token,
    isLoggedIn:isLoggedIn,
}

    return <AuthContext.Provider value={}>{props.children}</AuthContext.Provider>
};

export default AuthProvider;