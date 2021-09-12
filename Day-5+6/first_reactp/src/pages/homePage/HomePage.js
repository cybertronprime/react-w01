import "./index.css";
import Card from "./Card";
import {Link} from 'react-router-dom'

const HomePage = () => {
  //JSX COMPONENT
  //REACT.CREATE ELEMENT
  //Hooks
  //useState
  //useEffect
  //normal variable vs state variable
  //what is rendering in React & re-rendering

  const newArray = [
    {
      heading: "This is 1",
      paragraph: "This is P1",
    },
    {
      heading: "This is 2",
      paragraph: "This is P2",
    },
    {
      heading: "This is 3",
      paragraph: "This is P3",
    },
  ];

  return (
    <div className="home">
      <div className="card-container">
        {newArray.map((item, index) => {
          console.log(item, index);
         return (
            <Card
              heading1={item.heading}
              paragraph1={item.paragraph}
              key={index}
            />
          );
        })}
        <Link to="/">Go to homepage </Link>

      </div>
    </div>
  );
};

export default HomePage;



