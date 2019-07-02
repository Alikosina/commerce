import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";

export default class Catalog extends React.Component {
  render() {
    return (
      <div className="catalog">
        <Container>
          <Row>
            <Col md={4}>
              <CatalogItem />
            </Col>
            <Col md={4}>
              <CatalogItem />
            </Col>
            <Col md={4}>
              <CatalogItem />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
