import { useNavigate } from "react-router-dom";
import logo from "../../assets/styles/logo.png";
import welcome from "../../assets/styles/welcome-image.png";

const Home = () => {
  const navigate = useNavigate();

  const goToStore = () => {
    navigate("/store");
  };

  return (
    <div>
      <div className="nav">
        <a href="https://www.capgemini.com/gb-en" target="_blank">
          <img src={logo} alt="capgemini-logo" className="logo"></img>
        </a>
      </div>

      <div className="welcome flex flex-col flex-align-centre">
        <img src={welcome} alt="welcome-image" className="welcome-image"></img>
        <h1>Welcome to the assignment </h1>
        <p>
          This assignment is aimed at testing your ability to solve a coding challenge using React.js, Sass, and Typescript technologies. The interviewer will explain the task and you will have the chance to ask questions.
        </p>
        <p>
          Your task is to create an online store to showcase our clients' products to their customers.
        </p>
        <p>
          Already set up for you is a products endpoint: <span className="code">/api/get-products</span> which will return an array of products.
        </p>
        <p>You will need to:</p>
        <ul>
            <li>Display the products</li>
            <li>Allow customers to add and remove products from their basket</li>
            <li>Display the total cost of the customer's basket</li>
        </ul>
        <p>
          Good styling and design is not a requirement but feel free to showcase your abilities if you wish.
        </p>
        <p>
          Please remember to write tests for any features you create.
        </p>
        <p>Good luck🤞</p>
        <button onClick={goToStore}>START NOW</button>
      </div>
    </div>
  );
};

export default Home;
