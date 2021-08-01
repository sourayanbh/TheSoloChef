/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Spinner, InputGroup, FormControl } from "react-bootstrap";
import Button from "../Button/Button";
import RecipeCard from "./RecipeCard";
import { showRecipies } from "../Redux/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";

function FoodChefRecipies() {
  const [query, setQuery] = useState("chicken");
  const [searchText, setSearchText] = useState("");
  const [loading, isLoading] = useState(false);
  const allrecipies = useSelector((state) => state.recipies);
  const dispatch = useDispatch();

  const API_ID = "f56ed8e0";
  const API_KEY = "d7d934f9d6acacd3d3eeab43291f2952";

  const getSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const searchRecipe = async () => {
    await axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data.hits);
        isLoading(true);
        dispatch(showRecipies(response.data.hits));
        console.log(response.data.hits[0].recipe.ingredients);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchRecipe();
  }, [query]);

  const showsearchRecipe = () => {
    if (searchText === "") {
      setQuery("chicken");
    } else {
      setQuery(searchText);
    }
  };

  console.log("Recipies", allrecipies);

  return (
    <>
      <div>
        <div className="FoodChefRecipe">
          <h1 className="HeadingFoodChefRecipies">Our Recipies</h1>
          <div className="searchBar">
            <Row>
              <Col lg={9} md={8} sm={12}>
                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={getSearchText}
                    placeholder="Hungry For?"
                  />
                </InputGroup>
              </Col>
              <Col lg={3} md={4} sm={12}>
                <Button goTo={showsearchRecipe} buttonName="Search Recipe" />
              </Col>
            </Row>
          </div>

          {loading ? (
            <div className="Recipies">
              <Row>
                {allrecipies.map((Recipie, index) => {
                  return (
                    <Col lg={4} md={6} sm={12}>
                      <RecipeCard
                        id={index}
                        key={Recipie.recipe.label}
                        imageSRC={Recipie.recipe.image}
                        reciepeName={Recipie.recipe.label}
                        calories={Recipie.recipe.calories}
                        query={query}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : (
            <div>
              <Spinner animation="border" variant="info" />
              <h3 style={{ color: "#009688", margin: "5%" }}>
                Thanks for Your Patience,Quickly Bringing the Recipies
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FoodChefRecipies;
