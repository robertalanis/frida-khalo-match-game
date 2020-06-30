import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const Instructions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem', marginTop:'1rem' }}>Instructions</Button>
      <Collapse isOpen={isOpen}>
      <p>Try not to click the same image twice!</p>

      </Collapse>
    </div>
  );
}

export default Instructions;