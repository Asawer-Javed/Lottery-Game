import { useState } from "react";
import { Helper } from "./LotteryHelper";
import { sum } from "./LotteryHelper";

const Lottery = () => {
  let [ticket, setTicket] = useState(Helper(3));
  let isWinning = sum(ticket) === 15;

  let buyTicket = () => {
    setTicket(Helper(3));
  };
  return (
    <>
      <h1>Lottery Game!</h1>
      <div>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations! u won"}</h3>
    </>
  );
};

export default Lottery;
