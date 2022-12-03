import React from 'react';
import './style.css';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <button class="rounded-full ...">Save Changes</button>

      <Card
        imgURL="https://tinyurl.com/mw4s3sz6"
        title="Work"
        description="Description goes here"
      />
      <Card
        imgURL="https://tinyurl.com/5b7prhvk"
        title="Live"
        description="Description goes here"
      />
      <Card
        imgURL="https://tinyurl.com/2p8zzx7b"
        title="Socialize"
        description="Description goes here"
      />
    </div>
  );
}
