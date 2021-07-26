import React from "react";
import { Modal, Button,Spinner } from "react-bootstrap";


function RecipeModal(props) {


  


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title style={{color:"#009688",fontSize:"50px"}} id="contained-modal-title-vcenter">
          {props.recipename}
        </Modal.Title>
      </Modal.Header>
      {props.recipeLoad ? 
        <Modal.Body>
        <h4>Recipe Details</h4>
        <ol>
          {props.recipedetails.map((detail) => {
            return <li style={{fontSize:"20px"}}>{detail.text}</li>;
          })}
        </ol>
      </Modal.Body>:
      <div style={{margin:"20%"}}>
        <Spinner animation="border" variant="info" />
      </div>
      
      }
      
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal;
