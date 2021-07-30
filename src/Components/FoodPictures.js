import Button from "./Button/Button";
import React from "react";
import { Row, Col } from "react-bootstrap";
import FoodPicCard from "./FoodPictures/FoodpicturesCard";
import foodPic1 from "./Images/food1.jpg";
import foodPic2 from "./Images/Food2.jpg";
import Foodpic3 from "./Images/Food3.jpg";
import foodpic4 from "./Images/food4.jpg";
import foodpic5 from "./Images/food5.jpg";
import foodpic6 from "./Images/food6.jpg";
import foodpic7 from "./Images/food7.jpg";
import foodpic8 from "./Images/food8.jpg";
import foodpic9 from "./Images/food9.jpg";
import { useHistory } from "react-router";

function FoodPictures() {
  const history = useHistory();

  const gotoRecipePage = () => {
    history.push("/FoodChefRecipies");
  };

  return (
    <>
      <div className="foodPicturesHeading">
        <h1>
          <strong>Food Make Us Happy</strong>
        </h1>
        <p>See what some of the world's great say about Foods</p>
      </div>
      <div className="FoodPictures">
        <Row>
          <Col className="eachCard" lg={4} md={6} sm={12}>
            <FoodPicCard
              picture={foodPic1}
              cardText="“Ask not what you can do for your country. Ask what’s for lunch.”
                        ― Orson Welles"
            />
          </Col>
          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodPic2}
              cardText="“Seize the moment. Remember all those women on the 'Titanic' who waved off the dessert cart.”
                        ― Erma Bombeck"
            />
          </Col>
          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={Foodpic3}
              cardText="“There is no love sincerer than the love of food.”
                        ― George Bernard Shaw, Man and Superman"
            />
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row>
          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodpic4}
              cardText="“The only time to eat diet food is while you're waiting for the steak to cook.”
                        ― Julia Child"
            />
          </Col>

          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodpic6}
              cardText="“Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.”
                        ― Joss Whedon"
            />
          </Col>

          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodpic5}
              cardText="“I am a better person when I have less on my plate.”
                        ― Elizabeth Gilbert, Eat, Pray, Love"
            />
          </Col>
        </Row>

        <br></br>
        <br></br>

        <Row>
          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodpic7}
              cardText="“What I say is that, if a man really likes potatoes, he must be a pretty decent sort of fellow.”
― A.A. Milne"
            />
          </Col>

          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodpic8}
              cardText="“Wait. Why am I thinking about Krispy Kremes? We’re supposed to be exercising.”
― Meg Cabot, Big Boned"
            />
          </Col>

          <Col className="eachCard" lg={4} md={12} sm={12}>
            <FoodPicCard
              picture={foodpic9}
              cardText="“This above all: to thine own self be true,
And it must follow, as the night the day,
Thou canst not then be false to any man.”
― William Shakespeare, Hamlet"
            />
          </Col>
        </Row>

        <div style={{ margin: "3%" }}>
          <h1 style={{ marginBottom: "2%" }}>Excited To Cook?</h1>
          <Button buttonName="Search Recipies" goTo={gotoRecipePage} />
        </div>
      </div>
    </>
  );
}

export default FoodPictures;
