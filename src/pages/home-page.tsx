import * as React from "react";
import { Link } from "react-router-dom";
import "./home-page.styles.scss";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home-page-content">
      <h3>Welcome to the home page!</h3>
      <div>
        You can find the data visualization <Link to="/data">here</Link>.
      </div>
      <div>
        If you are more interested in the performance, take a look{" "}
        <Link to="/performance">here</Link>.
      </div>
    </div>
  );
};

export default HomePage;
