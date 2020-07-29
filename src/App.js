import React, { Component } from "react";

import Image from "./components/Image";
import Instructions from "./components/Instructions";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";

import paintings from "./paintings.json";
import "./App.css";

import { Jumbotron, Container, Row, Col } from "reactstrap";


class App extends Component {
	state = {
		paintings,
		clickedCards: [],
		score: 0,
		goal: 8,
		status: "",
	};

	//shuffle the painting cards in the browser when clicked
	shuffleScoreCard = (id) => {
		let clickedCards = this.state.clickedCards;

		if (clickedCards.includes(id)) {
			this.setState({
				clickedCards: [],
				score: 0,
				status: "Game Over! Click to play again!",
			});
			return;
		} else {
			clickedCards.push(id);

			if (clickedCards.length === 8) {
				this.setState({
					score: 8,
					status: "You Won! Click to play again!",
					clickedCards: [],
				});
				return;
			}

			this.setState({ paintings, clickedCards, score: clickedCards.length, status: " " });

			for (let i = paintings.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[paintings[i], paintings[j]] = [paintings[j], paintings[i]];
			}
		}
	};

	// Map over this.state.cards and render a Card component for each card object
	render() {
		return (
			<Container fluid className="App">
				<Row>
					<Col md="6">
						<header className="App-header">
							<Jumbotron className="App-title" style={{padding:"20px"}}>
								<h1>Frida Khalo</h1>
								<hr></hr>
								<h2>Click Game</h2>
								<Instructions></Instructions>
							</Jumbotron>
						</header>
					</Col>
					<Col md="6">
						<Score score={this.state.score} goal={8} status={this.state.status} />
						<Wrapper>
							{this.state.paintings.map((painting) => (
								<Image
									shuffleScoreCard={this.shuffleScoreCard}
									id={painting.id}
									key={painting.id}
									image={painting.image}
								/>
							))}
						</Wrapper>
						<footer>
						<p style={{marginBottom:"0px"}}>
							Designed by Robert Alanis.
							<a
								href="https://github.com/robertalanis/clicky-game"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								GitHub Repository
							</a>
							.
						</p>
					</footer>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default App;
