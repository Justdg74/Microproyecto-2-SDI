import React from 'react';
import styles from './Seats.module.css';

const SeatGrid = () => {
  const seats = Array(20).fill(null);

  return (
    <table className= {styles.SeatGrid}>
      <tbody>
        {seats.map((seat, index) => (
          <tr key={index}>
            <td>Seat {index + 1}A</td>
            <td>Seat {index + 1}B</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SeatGrid;