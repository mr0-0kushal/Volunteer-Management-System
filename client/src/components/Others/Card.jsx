import React from 'react';
import styled from 'styled-components';

const Card = ({id , title , content , image }) => {
  return (
    <StyledWrapper>
      <div className="cards rounded-lg">
        <div className="card__body">
          <div className="card__icon">
            <svg height={32} width={32} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>
          <p className="card__title">{title}</p>
          <p className="card__paragraph">
            {content}
          </p>
        </div>
        <div className="card__ribbon">
          <label className="card__ribbon-label ">{id}</label>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
    width: min(300px, 100%);
    margin: auto;
    background-color: #c2c5ff;
    text-align: center;
    border-top-left-radius: 4rem;
    border: 2px solid white;
    position: relative;
  }

  .cards::before {
    content: "";
    position: absolute;
    height: 30px;
    width: 120px;
    background-color: #889de9;
    top: 32px;
    right: -2.5px;
    -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  }

  .card__body {
    padding: 2rem 1.5rem;
    max-width: 25ch;
    margin: auto;
  }

  .card__title {
    color : #152250;
    font-weight: 800;
    font-size: 1.25rem;
    margin-block: 1.5rem 0.75rem;
  }

  .card__paragraph {
   color : #152250;
    font-size: 0.875rem;
  }

  .card__ribbon {
    margin-top: 1.5rem;
    display: grid;
    place-items: center;
    height: 50px;
    background-color: #889de9;
    position: relative;
    width: 110%;
    left: -5%;
    top: 10px;
    position: relative;
    border-radius: 0 0 2rem 2rem;
  }

  .card__ribbon::after,
  .card__ribbon::before {
    content: "";
    position: absolute;
    width: 20px;
    aspect-ratio: 1/1;
    bottom: 100%;
    z-index: -2;
    background-color: #889de9;
  }

  .card__ribbon::before {
    left: 0;
    transform-origin: left bottom;
    transform: rotate(45deg);
  }

  .card__ribbon::after {
    right: 0;
    transform-origin: right bottom;
    transform: rotate(-45deg);
  }

  .card__ribbon-label {
   color : #152250;
    display: block;
    width: 84px;
    aspect-ratio: 1/1;
    background-color: #c2c5ff;
    position: relative;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 8px solid #889de9;
    display: grid;
    place-items: center;
    font-weight: 900;
    line-height: 1;
    font-size: 1.5rem;
  }

  .card__ribbon-label::before,
  .card__ribbon-label::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 50%;
    
  }

  .card__ribbon-label::before {
    right: calc(100% + 3px);
    border-bottom-right-radius: 22px;
    box-shadow: 5px 5px 0 #889de9;
  }

  .card__ribbon-label::after {
    left: calc(100% + 3px);
    border-bottom-left-radius: 22px;
    box-shadow: -5px 5px 0 #889de9;
  }`;

export default Card;
