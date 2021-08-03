import React, { useState } from "react";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import Button from "../Button/Button";
import axios from "axios";
import { useHistory } from "react-router";


import RecipeModal from "./RecipeModal";

function RecipeCard(props) {
  const [modalShow, setModalShow] = useState(false);
  
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [loading,isLoading] = useState(false)

  
  const history = useHistory()

  

  const getRecipe = (id) => {
    const API_ID = "f56ed8e0";
    const API_KEY = "d7d934f9d6acacd3d3eeab43291f2952";

    axios
      .get(
        `https://api.edamam.com/search?q=${props.query}&app_id=${API_ID}&app_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data.hits);
        console.log(response.data.hits[id].recipe.ingredients);
        isLoading(true)
        setRecipeDetails(response.data.hits[id].recipe.ingredients);
      })
      .catch((error) => {
        console.log(error);
      });

    
    setModalShow(true);
  };


  const GoToPage = () => {
    history.push(`/EachFood/${props.query}/${props.id}`)
  }

  const cardClicked = () => {
    history.push(`/EachFood/${props.query}/${props.id}`)
  }

  return (
    <Fragment>
      <Card className="ReciepeCard" >
        <Card.Img onClick={cardClicked} className="cardImage" variant="top" src={props.imageSRC} />
        <Card.Body>
          <Card.Title>{props.reciepeName}</Card.Title>

          <Card.Text>
            Calories:<h6>{Math.floor(props.calories)}</h6>
            <Button
              goTo={() => {
                getRecipe(props.id);
              }}
              buttonName="View Recipe"
            />
            <RecipeModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              recipename={props.reciepeName}
              recipedetails={recipeDetails}
              recipeLoad = {loading}
            />
          </Card.Text>
          {/* <Button goTo={GoToPage} buttonName="View Full Details"/> */}
              <h5 className="viewFullRecipeText" onClick={GoToPage}>View Full Recipe {'>>'}</h5>

        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default RecipeCard;
