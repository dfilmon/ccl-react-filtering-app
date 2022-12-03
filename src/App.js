import React from 'react';
import './style.css';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <div id="buttonContainer">
        <button
          type="submit"
          className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Pray
        </button>

        <button
          type="submit"
          className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Code
        </button>

        <button
          type="submit"
          className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Design
        </button>
      </div>

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
