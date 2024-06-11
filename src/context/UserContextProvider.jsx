import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState()
    const [email, setemail] = React.useState()
    return(
        <UserContext.Provider value={{user, setUser,email,setemail}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider