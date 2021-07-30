import React from "react";
import { Card } from "react-bootstrap";

function FoodPicCard(props) {
  return (
    <>
      
        <Card className="foodpicCard" >
          <Card.Img src={props.picture} />
            <Card.Body>
                <Card.Text>
                    {props.cardText}
                </Card.Text>
            </Card.Body>
        </Card>
        
      
    </>
  );
}

export default FoodPicCard;
