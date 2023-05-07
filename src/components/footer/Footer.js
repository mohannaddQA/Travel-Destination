import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <section id="Footer">
      <div id="Socials">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="">facebook</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="">linkedin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="">github</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>Mohannad Qa</h3>
      </div>
      <br></br>
    </section>
  );
}
export default Footer;
