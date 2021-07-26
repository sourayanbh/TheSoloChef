import React from "react";

function RightSide() {
  return (
    <>
      <h1 className="rightPara">
        A <strong>recipe</strong> is a set of instructions that describes how to
        prepare or make something, especially a dish of prepared food.
      </h1>
      <div className="recipeDetails">
      <ol>
        <li className="eachLine">
          The<strong>Recipe Name</strong> tells you what you will be making.
          Sometimes the author will include personal information on the recipe.
        </li>
        <li className="eachLine">
          There are three components to a recipe. The first is the
          <strong>List of Ingredients</strong> , and the second is the{" "}
          <strong>Amount of the Ingredients</strong>.
        </li>
        <li className="eachLine">
          The third is the <strong>Preparation Instructions</strong>. A well-written recipe will
          list all ingredients in the order they will be added in the
          Preparation Instructions.
        </li>
        <li className="eachLine">
        Some recipe will include <strong>Variations</strong> for the recipe and also how to Store your prepared dish.
        </li>
      </ol>
      </div>
      
    </>
  );
}

export default RightSide;
