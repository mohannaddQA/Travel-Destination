import { useParams } from "react-router-dom";
import { useState } from "react";

function ToursDetails(props) {
  let tourData = props.tourData;

  const param = useParams();
  const Id = param.id;
  let myTour = tourData.filter((item) => Id === item.id);
  let Name = myTour[0].name;
  let img = myTour[0].image;
  let info = myTour[0].info;
  let price = myTour[0].price;
  const [showMore, setShowMore] = useState(false);

  // function ShowMoreLess() {}
  function ShowMoreLessHandler() {
    setShowMore(!showMore);
    // if (showMore) {
    //   let x = "show less";
    // } else {
    //   let x = "show more";
    // }
    // return x;
  }

  return (
    <>
      <h1>A tour to {Name}</h1>
      <img src={img} alt="//no image available//" />
      <h4>
        {showMore ? info : `${info.substring(0, 250)}`}
        <button onClick={ShowMoreLessHandler} className="btn">
          {showMore ? "Show less" : "Show more"}
        </button>
      </h4>
      <br></br>
      <br></br>

      <h2>the price for the tour is : {price}$</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
export default ToursDetails;
