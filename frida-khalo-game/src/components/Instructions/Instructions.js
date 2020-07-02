import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Instructions = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="dark" onClick={toggle} style={{ marginBottom: "1rem", marginTop: "1rem" }}>
				Instructions
			</Button>

			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Instructions</ModalHeader>
				<ModalBody>
          <ul>
            <li>Every time an image is clicked, the images rendered to the page will shuffle themselves in a random order.</li>
            <li>The score will be incremented when clicking an image for the first time.</li>
            <li>If the same image is clicked twice you will lose and the game will reset.</li>
            <li>You will win if you succesfully click on all nine images</li>
          </ul>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Exit
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default Instructions;
