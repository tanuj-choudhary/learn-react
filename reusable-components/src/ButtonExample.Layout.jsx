import React from 'react';
import Button from './features/button/Button.Layout';
import { Div } from './global.styles';

function ButtonExample() {
  return (
    <>
      <h1>Buttons</h1>
      <Div>
        <Button>Button 1</Button>
        <Button color="secondary">Button 2</Button>
        <Button color="success">Button 3</Button>
      </Div>

      <Div>
        <Button outline>Button 1</Button>
        <Button outline color="secondary">
          Button 2
        </Button>
        <Button outline color="success">
          Button 3
        </Button>
      </Div>

      <Div>
        <Button size="sm">Button 1</Button>
        <Button size="md">Button 2</Button>
        <Button size="lg">Button 3</Button>
      </Div>

      <Div>
        <Button color="danger">Button 1</Button>
        <Button color="danger" block>
          Button 2
        </Button>
      </Div>
    </>
  );
}

export default ButtonExample;
