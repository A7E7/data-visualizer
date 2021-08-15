import React from "react";
import { Card } from "react-bootstrap";

interface IUserCommentProps {
  name: string;
  email: string;
  body: string;
}

const UserComment: React.FunctionComponent<IUserCommentProps> = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.email}</Card.Subtitle>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserComment;
