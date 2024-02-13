import React from 'react';
import Filtercategory from './Filtercategory';
import Filterpro from './filterpro';


function Filterpage({handleClick}) {
  return (
    <div className='container-fluid'>
      <div className='row mt-4' style={{ marginBottom: '120px' }}>
        <div className='col-md-4'>
          <Filtercategory />
        </div>
        <div className='col-md-8'>
          <Filterpro handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default Filterpage;
