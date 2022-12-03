import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div class="column nature">
        <img src={props.imgURL} alt="Mountains" style={{ width: '100%' }} />
        <div class="content">
          <h4>Mountains</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
    </div>
  );
}
