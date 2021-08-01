import React from 'react'
import HomePage from './Components/HomePage'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AboutRecipes from './Components/AboutRecipies';
import FoodChefRecipies from './Components/EdamamRecipe/FoodChefRecipies'
import ExpandRecipe from './Components/ExpandRecipe';

function MainPage() {


    return (

        <Router>

            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/aboutRecipes" component={AboutRecipes} />
                <Route path = "/FoodChefRecipies" component={FoodChefRecipies} />
                <Route path="/EachFood/:Query/:id" component={ExpandRecipe} />
            </Switch>

        </Router>
    )
}

export default MainPage