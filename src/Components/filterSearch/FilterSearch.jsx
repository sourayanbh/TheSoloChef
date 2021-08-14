import React, { useState } from "react";
import { Form, Button,  Card } from "react-bootstrap";
import MyNavbar from "../Navbar";

function CreateRecipe() {
  const [data, getData] = useState({
    recipeName: "",
    cuisineType: "",
    dishType: "",
    recipeingredients: "",
    
  });

  const [showCard, setShowCard] = useState(false);
  
  

  const [details, setDetails] = useState({
    name: "",
    cuisine: "",
    dish: "",
    ingredients: "",
    
  });

  const getRecipeDetails = (e) => {
    getData((prevVal) => {
      return {
        ...prevVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const deleteRecipe = () => {
    localStorage.clear();
    localStorage.removeItem("recipeName");
    localStorage.removeItem("dishtype");
    localStorage.removeItem("cuisineType");
    localStorage.removeItem("recipeingredients");
    setShowCard(false);
    
  };

  

  const saveDetails = (e) => {

    e.preventDefault()

    
    
    localStorage.setItem("recipeName", data.recipeName);
    localStorage.setItem("cuisineType", data.cuisineType);
    localStorage.setItem("dishtype", data.dishType);
    localStorage.setItem("recipeingredients", data.recipeingredients);


    
    

    const NAME = localStorage.getItem("recipeName");
    const DISHTYPE = localStorage.getItem("dishtype");
    const CUISINE = localStorage.getItem("cuisineType");
    const INGRE = localStorage.getItem("recipeingredients");
    

    
    setDetails({
      name: NAME,
      dishtype: DISHTYPE,
      cuisine: CUISINE,
      ingre: INGRE,
      
    });

    setShowCard(true);
    alert("Recipe Saved")

    getData({
        recipeName : "",
        cuisineType : "",
        dishType : "",
        recipeingredients : "",

    })
    
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

            

            <Button variant="primary" type="submit"  onClick={saveDetails}>
              Save Recipe
            </Button>
          </Form>
        </div>

        <div>

          {showCard ? (
              <div className="recipecreatedCard">
              <h2 style={{margin:"10%",fontWeight:"bolder"}}>Your Recipe</h2>
              <Card  >
              <Card.Img variant="top" src={details.image} />
              <Card.Body>
                <Card.Title className="recipeTitie" >{details.name}</Card.Title>
                <Card.Text>Cuisine Type :{details.cuisine}</Card.Text>
                <Card.Text>Dish Type : {details.dishtype}</Card.Text>
                <Card.Text>Ingredients :{details.ingre}</Card.Text>
                <Button variant="primary" type="submit" onClick={deleteRecipe}>
                  Delete
                </Button>
              </Card.Body>

              
            </Card>
              </div>

          ) : (
            <h1>
              No recipies to show,Please Enter Recipe Details to save a Recipe
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateRecipe;
