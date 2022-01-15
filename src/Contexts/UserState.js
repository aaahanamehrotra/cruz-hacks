import { UserContext } from "./UserContext";

const UserState = (props) => {
    return(
        <UserContext.Provider value={props.user}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState