import React from 'react'
import {Form,Button} from 'react-bootstrap'



function Login(){


    return(
        <div className="LoginPage">
        <h1 className="LoginHeading">Login To Continue</h1>
        <div className="loginForm">
        
        <Form>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{margin:"3%"}} variant="primary" type="submit">
          Login
        </Button>
        <p style={{margin:"1%"}}>Dont have an account?,<a className="signInLink" href="/SignUp">Sign In</a></p>
      </Form>
        </div>
        
            
        </div>
    )
}

export default Login