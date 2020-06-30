import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Wrapper.css";

//stateless component
const Wrapper = (props) => (
	<Container className="wrapper">
		<Row>{props.children}</Row>
	</Container>
);

export default Wrapper;
