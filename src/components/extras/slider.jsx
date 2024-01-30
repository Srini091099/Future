import React, { useState } from "react";
import slider1 from '../asset/slider_1.jpg';
import slider2 from '../asset/slider_2.jpg';
import slider3 from '../asset/slider_3.jpg';

export function Sliderapp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container " >
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style={{ width: '80%', margin: '0 auto', }}
      >
        <div className="carousel-indicators">
          
          <div style={{margin:'2',marginRight:'250px',marginBottom:'140px'}}>
        <button className='btn btn-warning' >
        Buy Now
        
      </button>
      
      <p className="text-danger fw-bolder">Get 500+ products for <span className="fw-bold">Less than $400</span>
      </p>
     </div>
   
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className={index === 0 ? 'active' : ''}
            onClick={() => handleSelect(0)}
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            className={index === 1 ? 'active' : ''}
            onClick={() => handleSelect(1)}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            className={index === 2 ? 'active' : ''}
            onClick={() => handleSelect(2)}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner" >
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval={1000}>
            <img src={slider1} className=" d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${index === 1 ? 'active' : ''}`} data-bs-interval={3000}>
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>

          <div className={`carousel-item ${index === 2 ? 'active' : ''}`} data-bs-interval={300000}>
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          onClick={() => handleSelect(index - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          onClick={() => handleSelect(index + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>

      </div>

    </div>
  );
}

