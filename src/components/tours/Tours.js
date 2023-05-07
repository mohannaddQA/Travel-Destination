import Tour from "./tour/tour.js";
function Tours(props) {
  return (
    <>
      <div id="Main">
        <h1>Our Tours </h1>
        <Tour data={props.data} />
      </div>
    </>
  );
}
export default Tours;
