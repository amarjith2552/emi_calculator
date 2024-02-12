import './App.css';
import React, { useState } from 'react';
function App() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate)/ 1200; 
    const numberOfPayments = parseFloat(loanTenure)* 12; // 

    const emiValue =
      (principal * rateOfInterest)/
      (1 - Math.pow(1 + rateOfInterest, -numberOfPayments));

    setEmi(emiValue.toFixed(2));
  };
  return (
    <div className="App" style={{backgroundColor:'rgb(212, 242, 252)'}}>
            <h1 className='text-center p-2'>EMI Calculator</h1>
<div className="container">
  <div className="row">
    <div className="col-6 p-4">
<img className=' rounded shadow ' src="https://th.bing.com/th/id/R.bee7317aee951c01e820ce021bdb9788?rik=VG9GRW%2fpYXCHNA&riu=http%3a%2f%2fitsm-tlapa.edu.mx%2fmoodleits%2fpluginfile.php%2f6004%2fcourse%2foverviewfiles%2fAccounting-Software-gif.gif&ehk=P3QPwXUoZaAlJEEL9HLTChI0EPbwfIdnNFcqoEHxs4I%3d&risl=&pid=ImgRaw&r=0" width={'550px'} alt="" />
    </div>
    <div className="col-6 p-4">
    <div className='p-3' style={{textAlign:'center', backgroundColor:'lightblue',borderRadius:'20px',color:'black'}}>
     <div className='m-3 p-2'>
        <div className='d-flex'>
          <label style={{color:'black'}}>
            Loan Amount :
          </label> <br />
          <input className='form-control w-75'
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
        </div> <br />
        <div className='d-flex'>
          <label style={{color:'black'}}> 
            Interest Rate :
          </label> <br />
          <input className='form-control w-75'
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
        </div> <br />
        <div className='d-flex'>
          <label style={{color:'black'}}>
            Loan Tenure : 
          </label> <br />
          <input className='form-control w-75'
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
        </div> <br />
     </div>
      <button className='btn btn-primary rounded shadow' onClick={calculateEmi}>Calculate EMI</button> 
      {emi !== null && <p className='p-3' style={{color:'black'}}><span style={{color:'red'}}>EMI:</span> <span style={{color:'green'}}>₹{emi}</span> per month</p>}
    </div>
    </div>
  </div>
</div>
      

    </div>
  );
}

export default App;