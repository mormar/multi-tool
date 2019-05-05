import React, { useState, useEffect } from "react";

const initialState = {
  seedMoney: 0,
  couponRate: 0,
  numberCapitalizationPerYera: 0,
  periodOfTheDeposit: 0,
  finalCapital: "",
  net: "",
  gross: "",
  tax: "",
  period: ""
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

    setFinalCapital(final);
    setNet(net);
    setGross(gross);
    setTax(finalTax);

    return finalCapital;
  }

  return (
    <div>
      <form
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
        <div>
          <label>Seed Money - Kapitał początkowy </label>
          <input
            type="number"
            onChange={e => setSeedMoney(e.target.value)}
            value={seedMoney}
          />
        </div>
        <div>
          <label>Coupon Rate - Stopa procentowa nominalana </label>
          <input
            type="number"
            onChange={e => setCouponRate(e.target.value)}
            value={couponRate}
          />
        </div>
        <div>
          <label>
            Number of capitalization per yera - Liczba kapitalizacji w roku
          </label>
          <div>
            <button onClick = {() => setNumOfCapMenu(!numOfCapMenu)}>Number of capitalization</button>
            {numOfCapMenu ? (
              <ul>
                <li onClick={() => setNumberCapitalizationPerYera(1)}>
                  At the end of the period
                </li>
                <li onClick={() => setNumberCapitalizationPerYera(1)}>
                  Annual
                </li>
                <li onClick={() => setNumberCapitalizationPerYera(12)}>
                  Monthly
                </li>
                <li onClick={() => setNumberCapitalizationPerYera(365)}>
                  Daily
                </li>
              </ul>
            ) : null}

            {/* {console.log(
              "numberCapitalizationPerYera: ",
              numberCapitalizationPerYera
            )} */}
          </div>
        </div>
        <div>
          <label>Period of the deposit - okres depozytu </label>
          <input
            type="number"
            onChange={e => setPeriodOfTheDeposit(e.target.value)}
            value={periodOfTheDeposit}
          />
          <div>
            <button onClick={() => setPeriodMenu(!periodMenu)}>
              Capitalization
            </button>

            {periodMenu ? (
              <div className="menu">
                <li onClick={() => setPeriod(365)}>Days</li>
                <li onClick={() => setPeriod(12)}>Months</li>
                <li onClick={() => setPeriod(1)}>Years</li>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        {console.log("periodMenu", periodMenu)}
        <div>
          <input
            type="submit"
            value="Submit"
            onClick={() => setCalculate(!calculate)}
          />
        </div>
      </form>
      {/* {console.log(seedMoney)} */}
      {/* {console.log("period: ", period)} */}

      <h1>Final Capital : {finalCapital === "" ? 0 : finalCapital}</h1>
      <h2>Profit: {net === "" ? 0 : net}</h2>
      <h2>Tax: {tax === "" ? 0 : tax}</h2>
      <h2>Gross: {gross === "" ? 0 : gross}</h2>

      {/* {console.log(seedMoney)} */}
      {/* <h1>{count(seedMoney, couponRate, numberCapitalizationPerYera, periodOfTheDeposit)}</h1> */}
      {/* <button>Submit</button> */}
    </div>
  );
};

export default Depoosit;
