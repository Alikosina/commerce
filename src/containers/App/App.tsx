import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "../../modules/store";
import Catalog from "../Catalog";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
