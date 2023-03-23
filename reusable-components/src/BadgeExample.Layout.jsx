import React from 'react';
import Badge from './features/badge/Badge.Layout';
import { Div } from './global.styles';

function BadgeExample() {
  return (
    <>
      <h1>Badges</h1>
      <Div>
        <Badge color="warning">New 1</Badge>
        <Badge color="warning">New 2</Badge>
        <Badge color="warning">New 3</Badge>
      </Div>

      <Div>
        <Badge>New</Badge>
        <Badge color="secondary">New</Badge>
        <Badge color="success">New</Badge>
      </Div>

      <Div>
        <Badge color="danger">New</Badge>
        <Badge color="danger" pill>
          New
        </Badge>
      </Div>
    </>
  );
}

export default BadgeExample;
