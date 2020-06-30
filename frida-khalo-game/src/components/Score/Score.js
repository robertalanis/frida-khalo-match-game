import React from "react";
import { Progress } from "reactstrap";
import "./Score.css";

const Score = (props) => (
	<div className="gameScore">
		<div>
			<div className="text-center">
				<h3 style={{paddingTop:"30px"}}>Score: {props.score} of 9</h3>
			</div>
			<Progress color="info" value={(props.score / 9) * 100} />
		</div>
		<h3 className="status">{props.status}</h3>
	</div>
);

export default Score;
