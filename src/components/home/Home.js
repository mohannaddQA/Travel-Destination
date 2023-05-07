import Tours from "../tours/Tours";
import tour from "../tours/tour/tour";

function Home(props) {
  return (
    <>
      <Tours data={props.data} />
    </>
  );
}
export default Home;
