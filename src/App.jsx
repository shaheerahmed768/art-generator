import React, { useState, useEffect } from 'react';
import './App.css';

const ArtGenerator = () => {
  const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",
  ];

  const colors = ["#01d2fd", "#a600ff", "#ff0000", "#06d0c7"];

  const generatePattern = () => {
    const boxes = document.querySelectorAll(".container div");
    boxes.forEach((box) => {
      box.className = "";
      let i = Math.floor(Math.random() * shapes.length);
      let j = Math.floor(Math.random() * colors.length);
      box.classList.add(shapes[i]);
      box.style.backgroundColor = colors[j];
    });
  };

  useEffect(() => {
    generatePattern();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <button id="btn" onClick={generatePattern}>
        <b>Generate</b>
      </button>
    </div>
  );
};

export default ArtGenerator;
