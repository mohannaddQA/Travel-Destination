import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import db from "./data/db.json";
import Home from "./components/home/Home";
import ToursDetails from "./components/TourDetails/ToursDetails";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  // return <Home data={db} />;
  return (
    <body
      style={{
        backgroundImage:
          "linear-gradient(\n  305deg,\n  hsl(240deg 100% 20%) 0%,\n  hsl(315deg 100% 27%) 2%,\n  hsl(337deg 100% 43%) 5%,\n  hsl(17deg 100% 59%) 7%,\n  hsl(45deg 100% 50%) 11%,\n  hsl(69deg 89% 61%) 16%,\n  hsl(117deg 100% 79%) 23%,\n  hsl(161deg 100% 75%) 37%,\n  hsl(180deg 88% 80%) 60%,\n  hsl(195deg 72% 90%) 100%\n)",
      }}
    >
      <Header />
      <br />
      <hr />

      <Routes>
        <Route path="/" element={<Home data={db} />} />
        <Route path="/city/:id" element={<ToursDetails tourData={db} />} />
      </Routes>
      <br />
      <hr />

      <Footer />
    </body>
  );
}
export default App;
