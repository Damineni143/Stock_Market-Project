import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [selectedStockData, setselectedStockData] = useState('');
  const [StockDetails, setStockDetails] = useState(null);

  const getData = () => {
    fetch('https://api.iex.cloud/v1/data/core/REF_DATA?token=sk_e08a9732e5424ad0b3fded2c01b7ed8d')
      .then((response) => response.json())
      .then((data) => setRecords(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleStockChange = (event) => {
    const selectedSymbol = event.target.value;
    setselectedStockData(selectedSymbol);
    const selectedStockMarketDetails = records.find((employee) => employee.symbol === selectedSymbol);
    setStockDetails(selectedStockMarketDetails);
  };

  return (
    <div className="col main">
      <div className="d-flex">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 mt-4 ">
            <label htmlFor="stockDropdown" className="form-label">Select Stock Market Details:</label>
            <select
              className="form-select"
              id="stockDropdown"
              value={selectedStockData}
              onChange={handleStockChange}
            >
              <option value="">Select Stock Data</option>
              {records.map((output) => (
                <option key={output.symbol} value={output.symbol}>
                  {output.name} - {output.symbol} - {output.exchange}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 col-sm-offset-5">
            <h4 className="title mt-3 mb-3 text-center text-secondary">Data in Chart</h4>
            <div className="" style={{ height: "200px", width: "450px" }}>
              <PieChart selectedStockData={selectedStockData} />
            </div>
          </div>
          {StockDetails && (
            <div className="col-lg-5 col-md-6 col-sm-12 mt-4 ml-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{StockDetails.symbol}</h5>
                  <p className="card-text">
                    <strong>Symbol:</strong> {StockDetails.symbol}
                    <br />
                    <strong>Exchange:</strong> {StockDetails.exchange}
                    <br />
                    <strong>exchangeName:</strong> {StockDetails.exchangeName}
                    <br /> 
                     <strong>region:</strong> {StockDetails.region}
                    <br />
                    <strong>currency:</strong> {StockDetails.currency}
                    <br />
                    <strong>name:</strong> {StockDetails.name}
                    <br />
                    <strong>date:</strong> {StockDetails.date}
                    <br />
                    <strong>iexId:</strong> {StockDetails.iexId}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
