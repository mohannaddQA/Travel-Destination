import "./Tours.css";
function Tours(props) {
  return (
    <div id="Main">
      <h1>Our Tours </h1>
      <div>
        {props.data.map(function (item) {
          return (
            <div id="card">
              <h2>{item.name}</h2>
              <img src={item.image}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Tours;
