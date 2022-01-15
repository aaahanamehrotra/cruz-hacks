import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import Logout from './Logout'

const Profile = (props) => {
    const user = useContext(UserContext)
    return (
        <div>
        <h4> User Logged In: </h4>
      {user?.email}
      <Logout logout={props.logout}/>
        </div>
    )
}

export default Profile
