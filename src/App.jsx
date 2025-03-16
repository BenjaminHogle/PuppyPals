import React, { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
export default function App() {
  console.log(puppyList);
  //Hook useState creates special variable and special function
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPupInfo = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <>
      <h2 className="puppy-heading">Puppy Pals</h2>
      {featPupId && (
        <div>
          <h2>Info for for Puppy with ID: {featPupId}</h2>
          <h2>{featuredPupInfo.name}</h2>
          <ul>
            <li>Age: {featuredPupInfo.age}</li>
            <li>Email: {featuredPupInfo.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <p
          className="body-text"
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}
    </>
  );
}
