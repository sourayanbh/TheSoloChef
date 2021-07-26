import React from "react";
import { Col, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

function EachRecipe(props) {
  return (
    <div className="EdamamRecipeCards">
      
        <div>
            <RecipeCard
                imageSRC={props.imageSRC}
                reciepeName={props.reciepeName}
                ingredients={props.ingredients}
            />
        </div>
          
    
    </div>
  );
}

export default EachRecipe;
