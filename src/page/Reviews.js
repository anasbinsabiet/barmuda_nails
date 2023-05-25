import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ActionAreaCard from "../components/ActionAreaCard";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

function Reviews() {
  return (
    <div id="reviews">
      <Typography className="text-center pb-4" variant="h4">
        Satisfied Clients
      </Typography>
      <Carousel>
        <Carousel.Item interval={2000} prevLabel="pl">
          <Row>
            <Col>
              <ActionAreaCard />
            </Col>
            <Col>
              <ActionAreaCard />
            </Col>
            <Col>
              <ActionAreaCard />
            </Col>
            <Col>
              <ActionAreaCard />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Row>
            <Col>
              <ActionAreaCard />
            </Col>
            <Col>
              <ActionAreaCard />
            </Col>
            <Col>
              <ActionAreaCard />
            </Col>
            <Col>
              <ActionAreaCard />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Reviews;
