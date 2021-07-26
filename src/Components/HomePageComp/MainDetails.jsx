import React from "react";
import { Fragment } from "react";
import HomePageButtons from "./HomePageButtons";

function MainDetails(props) {
  return (
    <Fragment>
      <h1>{props.mainQuote}</h1>
      <h4>{props.supportQuote}</h4>

      <HomePageButtons
        redirectTo={props.redirectTo}
        buttonName="Search Recipes"
      />
    </Fragment>
  );
}

export default MainDetails;
