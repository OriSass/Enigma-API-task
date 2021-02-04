import React, { useEffect, useState } from "react";
import "../App.css";

function CurrencyRatings() {
  const [currencies, setCurrencies] = useState([]);

  const getCurrencies = async () => {
    const data = await fetch("https://www.live-rates.com/rates").then((res) =>
      res.json()
    );
    if (data.length !== 1) {
      console.log(data);
      setCurrencies(data);
    } else {
        /*
            Didn't find a way to bypass 3 request/hour limit.
            I Tried:
            1. using websocket to broadcast curreny changes and get updates every second       
            2. exploring the streaming api documentation
            3. exploring the socket.io-client documentation
            4. adding request headers through postman
            5. re-configuring the my ip address
        */ 
    }
  };
  useEffect(() => {
    getCurrencies();
  }, []);
  return (
      <>
    <table>
      <tr>
        <td><b>Currency</b></td>
        <td><b>Rate</b></td>
        <td><b>Bid</b></td>
        <td><b>Ask</b></td>
        <td><b>High</b></td>
        <td><b>Low</b></td>
        <td><b>Open</b></td>
        <td><b>Close</b></td>
        <td><b>Timestamp</b></td>
      </tr>
      {currencies.length > 0 && (
        currencies.map(
          (
            { currency, rate, bid, ask, high, low, open, close, timestamp },
            index
          ) => {
            return (
              <tr>
                <td key={index + "currency"}>{currency}</td>
                <td key={index + "rate"}>{rate}</td>
                <td key={index + "bid"}>{bid}</td>
                <td key={index + "ask"}>{ask}</td>
                <td key={index + "high"}>{high}</td>
                <td key={index + "low"}>{low}</td>
                <td key={index + "open"}>{open}</td>
                <td key={index + "close"}>{close}</td>
                <td key={index + "timestamp"}>{timestamp}</td>
              </tr>
            );
          }
        )
      ) }
    </table>
    {currencies.length === 0 && <h1>Sorry, the data is in-available at the moment</h1>}
    </>
  );
}

export default CurrencyRatings;
