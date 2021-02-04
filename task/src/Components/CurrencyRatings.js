import React, { useEffect, useState } from "react";
// const io = require("socket.io-client");
// const socket = io("https://wss.live-rates.com/");

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
      //   //Use the 'trial' as key to establish a 2-minute streaming connection with real-time data.
      //   //After the 2-minute test, the server will drop the connection and block the IP for an Hour.
      //   var key = "trial";
      //   //var key = 'XXXXXXX' //YOUR LIVE-RATES SUBSCRIPTION KEY
      //   socket.on("connect", function () {
      //     // if you want to subscribe only specific instruments, emit instruments. To receive all instruments, comment the line below.
      //     // var instruments = ["EURUSD", "USDJPY", "BTCUSD", "ETH"];
      //     // socket.emit("instruments", instruments);
      //     socket.emit("key", key);
      //   });
      //   socket.on("rates", function (msg) {
      //     //Do what you want with the Incoming Rates... Enjoy!
      //     try {
      //       let obj = JSON.parse(msg);
      //       console.log(obj);
      //       setCurrencies(obj);
      //     } catch (e) {
      //       console.log(msg);
      //     }
      //   });
    }
  };
  useEffect(() => {
    getCurrencies();
  }, []);
  return (
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
      {currencies.length > 0 ? (
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
      ) : (
        <h1>Sorry, the data is inavailabe at the moment</h1>
      )}
    </table>
  );
}

export default CurrencyRatings;
