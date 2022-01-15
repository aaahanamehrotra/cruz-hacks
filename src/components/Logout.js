import React from 'react'

const Logout = (props) => {
    return (
        <div>
            <button onClick={props.logout}> Sign Out </button>
        </div>
    )
}

export default Logout
