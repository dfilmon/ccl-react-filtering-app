import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div class="column nature">
        <img src={props.imgURL} alt="Mountains" style={{ width: '100%' }} />
        <div class="content">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
