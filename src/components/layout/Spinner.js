import React, { Fragment } from 'react';

const Spinner = () => (
  <Fragment>
    <div className='text-center'>
      <div className='spinner-border text-secondary my-4' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  </Fragment>
);

export default Spinner;
