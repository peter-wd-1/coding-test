import React, { Fragment } from 'react';
import hero1 from 'images/hero1.png'
import hero2 from 'images/hero2.png'

export default function Home() {
  return (
    <Fragment>
      <div name="row1">
        <div name="col1">
          <h1>
            To binging people <em>together</em>.
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button>
            PORTFOLIO
          </button>
        </div>
        <div name="col2">
          <img src={hero1} alt="hero-image" />
          <img src={hero2} alt="hero-image" />
        </div>
      </div>
      <div name="row2">
      </div>
    </Fragment>
  )
}
