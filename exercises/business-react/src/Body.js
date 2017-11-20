import React from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";

function Body(){
  const styles = {
    height: "250px",
    width: "150px"
  }
  return(
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="h24211941.png" thumbnail />
            Hamilton
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Hamilton
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Hamilton
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Seiko
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Seiko
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Seiko
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Seiko
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Seiko
          </Col>
          <Col xs={6} md={4}>
            <Image src="#" thumbnail />
            Seiko
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Body;
