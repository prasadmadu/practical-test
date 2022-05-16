import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const LoginForm = ({ Login, error}) => {
  const [details, setDetails] = useState({username: "", password: ""})

  const handlerSubmit = e => {
    e.preventDefault();
    Login(details);
  }
  return (
    <div>
      <Form onSubmit={handlerSubmit}>
        <h1>Login form</h1>
        {(error != "") ? ( <div className="error">{error}</div> ) : ""}
        
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm