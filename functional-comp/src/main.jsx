import React from 'react';
import ReactDOM from 'react-dom/client';
import StateWithFC from './StateWithFC';
import FormWithFc from './FormWithFC';
import StaleClosure from './StaleClosure';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <StateWithFC />
    <br />
    <FormWithFc /> */}
    <StaleClosure />
  </>
);
