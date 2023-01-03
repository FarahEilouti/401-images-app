import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function ChildCard(props) {
  const [numOfLikes, setNumOfLikes] = useState(0);

  const handleLike = () => {
    setNumOfLikes(numOfLikes + 1);

    props.total();
  };

  return (
    <div style = {{display: "flex", justifyContent: "center"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} onClick={handleLike}  />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Likes = {numOfLikes}
            {/* <p>Num of Likes: {this.state.numOfLikes}</p> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChildCard;
