import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MyNavbar from "./Navbar";
import { Spinner,Row,Col } from "react-bootstrap";

function ExpandRecipe() {
  const params = useParams();
  const [loading, isLoading] = useState(false);
  

  const [recipeName, setrecipeName] = useState({
    label: "",
    cuisinetype: "",
    dishtype: "",
    image: "",
    ingredients: [],

    url: "",
  });

  const API_ID = "f56ed8e0";
  const API_KEY = "d7d934f9d6acacd3d3eeab43291f2952";

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${params.Query}&app_id=${API_ID}&app_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data.hits);
        isLoading(true);
        setrecipeName({
          label: response.data.hits[params.id].recipe.label,
          cuisinetype: response.data.hits[params.id].recipe.cuisineType,
          dishtype: response.data.hits[params.id].recipe.dishType,
          image: response.data.hits[params.id].recipe.image,
          ingredients: response.data.hits[params.id].recipe.ingredients,
          url: response.data.hits[params.id].recipe.url,
        });

       

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(recipeName);

  return (
    <>
      <div className="expandRecipeWholePage">
        <MyNavbar />

        {loading ? (
          <div className="expandRecipe">
            <h1 className="recipeLabel">{recipeName.label}</h1>

            <img src={recipeName.image} className="recipePic" alt="foodpic" />
            
            

            <h4 className="cuisinetype">
              Cuisine Type : {recipeName.cuisinetype}
            </h4>
            <h4 className="dishtype">Dish Type : {recipeName.dishtype}</h4>

            <h3>
              <strong>Ingredients</strong>
            </h3>

            <ul>
              {recipeName.ingredients.map((ingre) => {
                return (
                  <div>
                  <Row>
                    <Col lg={6} >
                    <strong>
                      <li className="inredientsDet">
                        {ingre.text}, Amount : {ingre.weight}
                      </li>
                    </strong>
                    </Col>
                    <Col lg={6}>
                    <img
                      className="recipeimagedet"
                      src={ingre.image}
                      alt="ingrdinetImage"
                    />
                    </Col>
                  </Row>
                    
                    
                  </div>
                );
              })}
            </ul>

            <h6 className="gotoOtherRecipePageLink"><a href={recipeName.url}><strong>Want to explore More ! Click Here</strong></a></h6>
            
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
            <Spinner animation="border" variant="info" />
            <h3 style={{ color: "#009688", margin: "5%" }}>
              Thanks for Your Patience,Quickly Bringing the Recipies
            </h3>
          </div>
        )}
      </div>
    </>
  );
}

export default ExpandRecipe;
