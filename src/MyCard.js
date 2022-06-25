import React from "react";
import { Card, CardTitle, CardBody, CardText, Button } from "reactstrap";
import {
  FaMailBulk,
  FaMailchimp,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="p-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkerAlt className="m-2" />
          {details.location?.city}
        </CardText>
        <CardText>
          <FaTelegramPlane className="m-2" />
          {details.phone}
        </CardText>
        <CardText>
          <Button color="success">Age :{details.dob?.age}</Button>
        </CardText>
        <CardText>
          <Button className="success mb-1">{details.email}</Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
