// import React from 'react'
import { useEffect } from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

export default function Grid(props) {
  const generateCells = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(<Cell />);
    }
    return arr;
  };

  // eslint-disable-next-line react/prop-types
  let listOfCells = generateCells(props.numberOfCells);

  useEffect(() => {}, []);

  return <div className='grid-container'>{listOfCells}</div>;
}
