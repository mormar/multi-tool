import React, { useState, useEffect } from "react";
import "../App.css";

const initialState = {
  seedMoney: 0,
  couponRate: 0,
  numberCapitalizationPerYera: 1,
  periodOfTheDeposit: 0,
  finalCapital: "",
  net: "",
  gross: "",
  tax: "",
  period: 12
};

const Depoosit = () => {
  const [seedMoney, setSeedMoney] = useState(initialState.seedMoney);
  const [couponRate, setCouponRate] = useState(initialState.couponRate);
  const [
    numberCapitalizationPerYera,
    setNumberCapitalizationPerYera
  ] = useState(initialState.numberCapitalizationPerYera);
  const [periodOfTheDeposit, setPeriodOfTheDeposit] = useState(
    initialState.periodOfTheDeposit
  );

  const [finalCapital, setFinalCapital] = useState(initialState.finalCapital);
  const [net, setNet] = useState(initialState.net);
  const [gross, setGross] = useState(initialState.gross);
  const [tax, setTax] = useState(initialState.tax);

  const [periodMenu, setPeriodMenu] = useState(false);
  const [numOfCapMenu, setNumOfCapMenu] = useState(false);
  const [calculate, setCalculate] = useState(false);

  const [period, setPeriod] = useState(initialState.period);

  function count(
    seedMoney,
    couponRate,
    numberCapitalizationPerYera,
    periodOfTheDeposit
  ) {
    console.log("*******");
    console.log("period: ", period);
    // console.log("seedMoney typeof ", typeof seedMoney);
    // console.log("seedMoney ", seedMoney);
    // console.log("seedMoney parseFloat ", parseFloat(seedMoney));
    // console.log("seedMoney typeof ", typeof seedMoney);

    const _seedMoney = parseFloat(seedMoney);
    // console.log("_seedMoneyest", _seedMoney);
    // console.log("_seedMoney ", typeof _seedMoney);

    // console.log("seedMoney", typeof(couponRate));
    // console.log("seedMoney", couponRate);

    // console.log("couponRate", couponRate);
    // console.log("numberCapitalizationPerYera", numberCapitalizationPerYera);
    // console.log("periodOfTheDeposit", periodOfTheDeposit);

    const finalCapital =
      _seedMoney *
      Math.pow(
        1 + couponRate / 100 / numberCapitalizationPerYera,
        (numberCapitalizationPerYera * periodOfTheDeposit) / period
      );

    const tax = (finalCapital - _seedMoney) * 0.19;
    const profit = finalCapital - (_seedMoney + tax);

    const gross = (finalCapital - _seedMoney).toFixed(2);
    const net = profit.toFixed(2);
    const finalTax = tax.toFixed(2);

    const sum = parseFloat(net) + parseFloat(finalTax);
    const grossNum = parseFloat(gross);
    const final = finalCapital.toFixed(2);

    const all = finalCapital - tax;

    if (grossNum === sum) {
      console.log("OK");
    } else {
      console.log("Wrong");
    }

    console.log("finalCapital: ", finalCapital);
    console.log("final: ", final);
    console.log("tax: ", tax);
    console.log("profit: ", profit);
    console.log("gross: ", gross);
    console.log("net: ", net);
    console.log("finalTax: ", finalTax);
    console.log("sum: ", sum);
    console.log("all: ", all);

    setFinalCapital(all);
    setNet(net);
    setGross(gross);
    setTax(finalTax);

    return finalCapital;
  }

  return (
    <div className="main">
      <h1 className="main-title">Investment Calculator</h1>
      <div className="test">
        <form
          className="left"
          onSubmit={e => {
            e.preventDefault(); // Zapobiega odświezaniu strony po przesłaniu formularza
            if (calculate) {
              count(
                seedMoney,
                couponRate,
                numberCapitalizationPerYera,
                periodOfTheDeposit
              );
            }
          }}
        >
          <div className="row">
            <div className="row-inside">
              <label className="title">Seed Money</label>
              <input
                className="value"
                type="number"
                onChange={e => setSeedMoney(e.target.value)}
                value={seedMoney}
              />
            </div>
            <div className="row-inside">
              <label className="title">Coupon Rate (%)</label>
              <input
                className="value"
                type="number"
                onChange={e => setCouponRate(e.target.value)}
                value={couponRate}
              />
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="row-inside">
              <label className="title">Period of the deposit</label>
              <input
                className="value"
                type="number"
                onChange={e => setPeriodOfTheDeposit(e.target.value)}
                value={periodOfTheDeposit}
              />
              <div className="menu">
                {/* <button onClick={() => setPeriodMenu(!periodMenu)}>
                  Capitalization
                </button> */}

                {/* {periodMenu ? ( */}
                  <select onChange={(e) => setPeriod(e.target.value)} defaultValue={12}>
                    <option value={365}>Days</option>
                    <option value={12}>Months</option>
                    <option value={1}>Years</option>
                  </select>
                  {console.log("peirod: ", period)}
                {/* ) : (
                  <div />
                )} */}
              </div>
            </div>
            <div className="row-inside">
              <label className="title">Number of capitalization per yera</label>
              <div className="menu">
                {/* <button onClick={() => setNumOfCapMenu(!numOfCapMenu)}>
                  Number of capitalization
                </button>
                {numOfCapMenu ? ( */}
                  <select onChange={(e) => setNumberCapitalizationPerYera(e.target.value)}>
                    <option value={1}>
                      At the end of the period
                    </option>
                    <option value={1}>
                      Annual
                    </option>
                    <option value={12}>
                      Monthly
                    </option>
                    <option value={365}>
                      Daily
                    </option>
                  </select>
                {/* ) : null} */}
                {console.log("numberCapitalizationPerYera:", numberCapitalizationPerYera)}
              </div>
            </div>
            <div className="row-inside">
              <input
                className="calculate"
                type="submit"
                value="Calculate"
                onClick={() => setCalculate(!calculate)}
              />
            </div>
          </div>

          {/* {console.log("periodMenu", periodMenu)} */}
          {/* <div className="row">
            <input
              className="calculate"
              type="submit"
              value="Calculate"
              onClick={() => setCalculate(!calculate)}
            />
          </div> */}
        </form>
        {/* {console.log(seedMoney)} */}
        {/* {console.log("period: ", period)} */}
        <div className="right">
          <h2>Final Capital : {finalCapital === "" ? 0 : finalCapital}zł</h2>
          <div className="more-info">
            <h3 className="details">Gross: {gross === "" ? 0 : gross}zł</h3>
            <h3 className="details">Profit: {net === "" ? 0 : net}zł</h3>
            <h3 className="details">Tax: {tax === "" ? 0 : tax}zł</h3>
          </div>
         
        </div>
      </div>
      {/* {console.log(seedMoney)} */}
      {/* <h1>{count(seedMoney, couponRate, numberCapitalizationPerYera, periodOfTheDeposit)}</h1> */}
      {/* <button>Submit</button> */}
    </div>
  );
};

export default Depoosit;
