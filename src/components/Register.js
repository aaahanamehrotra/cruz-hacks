import React from 'react'

const Register = (props) => {
    return (
        <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            props.setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            props.setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={props.register}> Create User</button>
      </div>
    )
}

export default Register
