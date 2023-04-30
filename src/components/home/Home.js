import Header from "../header/Header";
import Tours from "../tours/Tours";

import Footer from "../footer/Footer";

function Home(props) {
  return (
    <section>
      <Header />
      <Tours data={props.data} />
      <Footer />
    </section>
  );
}
export default Home;
