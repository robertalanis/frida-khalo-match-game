import React from "react";
import { Card, CardImg, Container, Row, Col } from "reactstrap";
import "./Image.css";

const Image = (props) => (
	<Col sm="4">
		<Card>
			<CardImg
				alt={props.title}
				src={props.image}
				id={props.id}
				onClick={() => props.shuffleScoreCard(props.id)}
				className="shuffleScore"
			></CardImg>
		</Card>
	</Col>
);

export default Image;
