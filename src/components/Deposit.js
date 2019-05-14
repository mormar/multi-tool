import React, { useState } from "react";
import { Button, Input, Label, Select } from "../elements";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .main {
    display: flex;
  }
  .left {
    // flex: 50%;
    margin: 0px 25px 0 0;
  }
  .right {
    flex: 50%;
    margin: 5px 0 0 25px;
    .title {
      font-size: 2em;
      margin: 0;
    }
    .details {
      font-size: 1.5em;
      margin: 10px 0;
    }
  }
  .main-title {
    font-size: 3em;
    margin: 30px 10px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .row-inside {
    display: flex;
    flex-direction: column;
    flex: 50%;
  }
`;

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

  const [calculate, setCalculate] = useState(false);

  const [period, setPeriod] = useState(initialState.period);

  function count(
    seedMoney,
    couponRate,
    numberCapitalizationPerYera,
    periodOfTheDeposit
  ) {
    const _seedMoney = parseFloat(seedMoney);

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
    // const final = finalCapital.toFixed(2);

    const all = finalCapital - tax;

    if (grossNum === sum) {
      console.log("OK");
    } else {
      console.log("Wrong");
    }
    // console.log all calculation
    // console.log("finalCapital: ", finalCapital);
    // console.log("final: ", final);
    // console.log("tax: ", tax);
    // console.log("profit: ", profit);
    // console.log("gross: ", gross);
    // console.log("net: ", net);
    // console.log("finalTax: ", finalTax);
    // console.log("sum: ", sum);
    // console.log("all: ", all);

    setFinalCapital(all);
    setNet(net);
    setGross(gross);
    setTax(finalTax);

    return finalCapital;
  }

  return (
    <Main>
      <h1 className="main-title">Investment Calculator</h1>
      <div className="main">
        <form
          className="left"
          onSubmit={e => {
            e.preventDefault(); // Prevent refresh after send form
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
              <Label>Seed Money</Label>
              <Input
                type="number"
                onChange={e => setSeedMoney(e.target.value)}
                value={seedMoney}
              />
            </div>
            <div className="row-inside">
              <Label>Coupon Rate (%)</Label>
              <Input
                type="number"
                onChange={e => setCouponRate(e.target.value)}
                value={couponRate}
              />
            </div>
            <div className="row-inside">
              <Label>Period of the deposit</Label>
              <Input
                type="number"
                onChange={e => setPeriodOfTheDeposit(e.target.value)}
                value={periodOfTheDeposit}
              />
                <Select
                  onChange={e => setPeriod(e.target.value)}
                  defaultValue={12}
                >
                  <option value={365}>Days</option>
                  <option value={12}>Months</option>
                  <option value={1}>Years</option>
                </Select>
            </div>
            <div className="row-inside">
              <Label>Number of capitalization per year</Label>
                <Select
                  onChange={e => setNumberCapitalizationPerYera(e.target.value)}
                >
                  <option value={1}>At the end of the period</option>
                  <option value={1}>Annual</option>
                  <option value={12}>Monthly</option>
                  <option value={365}>Daily</option>
                </Select>
              
            </div>
            <div className="row-inside">
              <Button
                modifiers={["submit"]}
                onClick={() => setCalculate(!calculate)}
              >
                Calculate
              </Button>
            </div>
          </div>
        </form>
        <div className="right">
          <h2 className="title">Final Capital : {finalCapital === "" ? 0 : finalCapital}zł</h2>
          <div className="more-info">
            <h3 className="details">Gross: {gross === "" ? 0 : gross}zł</h3>
            <h3 className="details">Profit: {net === "" ? 0 : net}zł</h3>
            <h3 className="details">Tax: {tax === "" ? 0 : tax}zł</h3>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Depoosit;
