import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
// import ToursDetails from "../../TourDetails/ToursDetails";

// import { useState } from "react";

function Tour(props) {
  let navigate = useNavigate();

  // const [TourIsShown, setTourIsShown] = useState(false);
  function toursDetails(id) {
    // setTourIsShown(true);
    // if (TourIsShown) {
    return navigate(`/city/${id}`);
  }
  // }

  return (
    <>
      {props.data.map(function (item) {
        return (
          <div style={{ padding: "20px", display: "inline-block" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>to read more click the button</Card.Text>
                <Button
                  onClick={() => {
                    toursDetails(item.id);
                  }}
                  variant="primary"
                >
                  Go to {item.name}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}
export default Tour;
