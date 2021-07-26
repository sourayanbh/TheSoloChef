import React from "react";
import { useHistory } from "react-router";
import MainDetails from "./HomePageComp/MainDetails";
import MyNavbar from "./Navbar";

function HomePage() {
  const history = useHistory();
  

  const redirectTo = () => {
    history.push("/FoodChefRecipies");
  };

  return (
    <div className="HomePage">
      <MyNavbar />

      <div className="HomePageContent">
        <MainDetails
          mainQuote="A recipe is a story that ends with a good meal"
          supportQuote="Come Join us to Be The Solo Chef with your own story."
          redirectTo={redirectTo}
        />
      </div>
    </div>
  );
}

export default HomePage;
