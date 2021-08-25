import "./index.css";

const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <div className="icon">
        <i class="bx bxl-aws"></i>
      </div>
      <h3 className="heading">{props.heading1}</h3>
      <p className="text">
        {props.paragraph1}
      </p>
    </div>
  );
};

export default Card;
