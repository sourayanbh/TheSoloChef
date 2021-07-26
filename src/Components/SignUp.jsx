import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SignUp(){


    return(
        <div>
        <div className="LoginPage">
        <h1 className="LoginHeading">Sign Up</h1>
        
        <h4 style={{color:"white"}}>Be a part of our Family</h4>
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
          Sign Up
        </Button>
        <p style={{margin:"1%"}}>Already Part of Us?,<a className="signInLink" href="/Login">Login</a></p>
      </Form>
        </div>
        
            
        </div>
        </div>
    )
}

export default SignUp