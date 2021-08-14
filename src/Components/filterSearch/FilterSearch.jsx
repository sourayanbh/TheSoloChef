import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import MyNavbar from "../Navbar";

const allRecipies = JSON.parse(localStorage.getItem("recipeDetails"));
let checkLen = false

// const myArrayLen = allRecipies.length;
  if((Array.isArray(allRecipies) && allRecipies.length) )
  {
    checkLen = true   
  }
  else{
    checkLen = false
  }

  

function CreateRecipe() {
  const recipies = [];
  
 const [showData,setShowData] = useState(checkLen)
  

  const [data, getData] = useState({
    recipeName: "",
    cuisineType: "",
    dishType: "",
    recipeingredients: "",
  });

  console.log(checkLen)

  

  const getRecipeDetails = (e) => {
    getData((prevVal) => {
      return {
        ...prevVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const saveDetails = (e) => {
    e.preventDefault();

    recipies.push(data);

    localStorage.setItem("recipeDetails", JSON.stringify(recipies));

    setShowData(checkLen)
  };

  const deleteRecipe = () => {
    localStorage.clear();
    setShowData(!checkLen)
  };

  

  

  return (
    <>
      <div className="createReciepe">
        <div>
          <MyNavbar />
        </div>

        <div className="createRecipeForm">
          <h1>Enter Your Recipe Details</h1>
          <p>You can save only one Recipe</p>

          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                name="recipeName"
                placeholder="Recipe Name"
                onChange={getRecipeDetails}
                size="lg"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cuisine Type</Form.Label>
              <Form.Control
                type="text"
                name="cuisineType"
                placeholder="Cuisine Type"
                onChange={getRecipeDetails}
                size="lg"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Dish Type</Form.Label>
              <Form.Control
                type="text"
                name="dishType"
                placeholder="Dish Type"
                onChange={getRecipeDetails}
                size="lg"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Ingredients(Enter With order number to beautify your ingredients list)"
                rows={6}
                onChange={getRecipeDetails}
                name="recipeingredients"
                size="lg"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={saveDetails}>
              Save Recipe
            </Button>
          </Form>
        </div>



            {showData ?<div>{allRecipies.map((reci) => {
            return (
              <div>

              <Card className="recipecreatedCard">
                <Card.Title className="recipeTitie">{reci.recipeName}</Card.Title>
                <Card.Body>Cuisine  : {reci.cuisineType}</Card.Body>
                <Card.Body>DishType : {reci.dishType}</Card.Body>
                <Card.Body>Ingredients : {reci.recipeingredients}</Card.Body>
                <Button onClick={deleteRecipe}>Delete</Button>
              </Card>
              
              </div>
              
            )
          })}</div>  : <h1>No Recipies Found,Please Add</h1>}


          

          

        
      </div>
    </>
  );
}

export default CreateRecipe;




