import * as React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../modules/products/productsActions";
import { Container, Row, Col } from "react-bootstrap";
import Catalog from "../Catalog";
import "./App.scss";

class App extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="app">
        <Container className="app-container" fluid>
          <Row>
            <Col md={9}>
              <Catalog />
            </Col>
            <Col md={3} />
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
