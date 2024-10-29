"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.js';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Calculator, FileText, TrendingDown } from 'lucide-react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(5);
  const [propertyTax, setPropertyTax] = useState(200);
  const [homeownersInsurance, setHomeownersInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(100);
  const [utilities, setUtilities] = useState(100);
  const [copied, setCopied] = useState(false);

  const calculatePrincipalInterest = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPrincipalInterest =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return monthlyPrincipalInterest.toFixed(2);
  };

  const calculateTotalMonthlyPayment = () => {
    const principalInterest = calculatePrincipalInterest();
    const monthlyPropertyTax = propertyTax / 12;
    const monthlyHomeownersInsurance = homeownersInsurance;
    const monthlyHoaFees = hoaFees;
    const monthlyUtilities = utilities;

    return (
      parseFloat(principalInterest) +
      monthlyPropertyTax +
      monthlyHomeownersInsurance +
      monthlyHoaFees +
      monthlyUtilities
    ).toFixed(2);
  };

  const principalInterest = calculatePrincipalInterest();
  const totalMonthlyPayment = calculateTotalMonthlyPayment();

  const handleCopy = () => {
    const url = `${window.location.origin}/mortgage-calculator?homePrice=${homePrice}&downPayment=${downPayment}&loanTerm=${loanTerm}&interestRate=${interestRate}&propertyTax=${propertyTax}&homeownersInsurance=${homeownersInsurance}&hoaFees=${hoaFees}&utilities=${utilities}`;

    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy link: ", err));
  };



  const stateData = [
    { state: 'AL', medianEffective: '0.41%', meanEffective: '0.40%', medianValue: '$157,100', taxesPaid: '$646' },
    { state: 'AK', medianEffective: '1.23%', meanEffective: '1.04%', medianValue: '$282,800', taxesPaid: '$3,464' },
    { state: 'AZ', medianEffective: '0.62%', meanEffective: '0.63%', medianValue: '$265,600', taxesPaid: '$1,648' },
    { state: 'AR', medianEffective: '0.62%', meanEffective: '0.64%', medianValue: '$142,100', taxesPaid: '$878' },
  ];

  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-20 bg-green-50 p-4">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg overflow-x-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Mortgage Calculator</h1>
            <p className="text-gray-800 mb-6">
              Our mortgage calculator includes key factors like homeowners association fees, property taxes, home insurance, and private mortgage insurance (PMI).
              Get the full picture and calculate your total monthly payment.
            </p>

            {/* Home Price Section with Slider and Input */}
            <div className="mb-6">
              <label className="text-gray-900 font-semibold">Home Price: ${homePrice.toLocaleString()}</label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={homePrice}
                  className="w-1/2 p-2 border rounded-md text-gray-900 mr-2"
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setHomePrice(value);
                  }}
                />
                <input
                  type="range"
                  min="50000"
                  max="3000000"
                  step="1000"
                  value={homePrice}
                  className="w-full mt-2 bg-green-300 accent-green-600"
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setHomePrice(value);
                  }}
                />
              </div>
            </div>

            {/* Input Section */}
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <label className="text-gray-900 font-semibold">Down payment</label>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md text-gray-900"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                  />
                  <span className="ml-2 text-gray-900">%</span>
                </div>
              </div>
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <label className="text-gray-900 font-semibold">Length of loan</label>
                <select
                  className="w-full p-2 mt-2 border rounded-md text-gray-900"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                >
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="30">30 years</option>
                </select>
              </div>
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <label className="text-gray-900 font-semibold">Interest rate</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full p-2 mt-2 border rounded-md text-gray-900"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label className="text-gray-900 font-semibold">Property tax</label>
                <input
                  type="number"
                  className="w-full p-2 mt-2 border rounded-md text-gray-900"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label className="text-gray-900 font-semibold">Home Insurance</label>
                <input
                  type="number"
                  className="w-full p-2 mt-2 border rounded-md text-gray-900"
                  value={homeownersInsurance}
                  onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label className="text-gray-900 font-semibold">HOA Fees</label>
                <input
                  type="number"
                  className="w-full p-2 mt-2 border rounded-md text-gray-900"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label className="text-gray-900 font-semibold">Utilities</label>
                <input
                  type="number"
                  className="w-full p-2 mt-2 border rounded-md text-gray-900"
                  value={utilities}
                  onChange={(e) => setUtilities(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Monthly Payment Display */}
            <div className="text-center bg-gray-100 p-4 rounded-lg my-4">
              <p className="text-xl font-semibold text-gray-900">Monthly Payment</p>
              <p className="text-3xl font-bold text-green-700">${totalMonthlyPayment}/mo</p>
            </div>

            {/* Monthly Payment Breakdown Section */}
            <div className="flex flex-wrap items-start space-x-8 my-8">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly payment breakdown</h2>
                <p className="text-3xl font-bold text-gray-900">${totalMonthlyPayment}/mo</p>

                {/* Color Bars */}
                <div className="flex space-x-2 mt-6">
                  <div className="w-20 h-6 bg-green-600 rounded-full"></div>
                  <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
                  <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                </div>
              </div>

              {/* Labels and Input Boxes */}
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-900">Principal & Interest</p>
                  <input type="text" className="w-20 p-2 border rounded-md text-gray-900" value={principalInterest} readOnly />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-900">Property Taxes</p>
                  <input type="text" className="w-20 p-2 border rounded-md text-gray-900" value={(propertyTax / 12).toFixed(2)} readOnly />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-900">Home Insurance</p>
                  <input type="text" className="w-20 p-2 border rounded-md text-gray-900" value={homeownersInsurance} readOnly />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-900">HOA Fees</p>
                  <input type="text" className="w-20 p-2 border rounded-md text-gray-900" value={hoaFees} readOnly />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-900">Utilities</p>
                  <input type="text" className="w-20 p-2 border rounded-md text-gray-900" value={utilities} readOnly />
                </div>
              </div>
            </div>

            {/* Copy Link Button */}
            <div className="text-center my-6">
              <button onClick={handleCopy} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Copy Link to Share
              </button>
              {copied && <p className="text-green-600 mt-2">Link Copied!</p>}
            </div>
          </div>


          <div className="max-w-4xl mx-auto px-6 py-8 font-sans">
        {/* How does a mortgage calculator help me? section */}
          <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How does a mortgage calculator help me?
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How much monthly mortgage payment can I afford?
        </h2>

        <div className="text-gray-600 mb-8 space-y-4">
          <p>
            Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
          </p>
          <p>
            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It's most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
          </p>
        </div>

        {/* DTI Formula Display */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-4">Formula for calculating your debt-to-income (DTI) ratio:</p>
          <div className="flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="border-b border-gray-400 mb-1">
                <span className="text-gray-900">Monthly Debt Payments</span>
              </div>
              <span className="text-gray-900">Monthly Gross Income</span>
            </div>
            <span className="text-gray-900 mx-4">x 100 =</span>
            <span className="text-green-700 font-semibold">Debt-to-Income<br />Ratio</span>
          </div>
        </div>

        {/* DTI Example */}


        <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-lg">
      <p className="text-gray-800 mb-4">Here's an example of what calculating your DTI might look like:</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Debts</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-800">
              <span>Auto loan</span>
              <span>$350/month</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Student loans</span>
              <span>$220/month</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Credit cards</span>
              <span>$130/month</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Expected<br />housing costs</span>
              <span>$1,800/month</span>
            </div>
            <div className="pt-2 border-t border-gray-300">
              <div className="flex justify-between font-semibold text-gray-900">
                <span>$2,500 monthly debt obligation</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Income</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-800">
              <span>Monthly salary<br />$60,000/12</span>
              <span>$5,000/month</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Monthly side-gig<br />income</span>
              <span>$1,500/month</span>
            </div>
            <div className="pt-2 border-t border-gray-300">
              <div className="flex justify-between font-semibold text-gray-900">
                <span>$6,500 monthly income</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="border-b-2 border-gray-400 mb-1">
            <span className="text-gray-900 font-medium">$2,500</span>
          </div>
          <span className="text-gray-900 font-medium">$6,500</span>
        </div>
        <span className="text-gray-900 font-medium mx-4">x 100 =</span>
        <span className="text-emerald-600 font-semibold text-lg">38% DTI</span>
      </div>

      <p className="text-gray-600 text-sm mt-4 italic">
        The above scenario is for illustrative purposes only.
      </p>
    </div>




        {/* <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">Here's an example of what calculating your DTI might look like:</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-semibold mb-3">Debts</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Auto loan</span>
                  <span>$350/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Student loans</span>
                  <span>$220/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Credit cards</span>
                  <span>$130/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected<br />housing costs</span>
                  <span>$1,800/month</span>
                </div>
                <div className="pt-2 border-t border-gray-300">
                  <div className="flex justify-between font-semibold">
                    <span>$2,500 monthly debt obligation</span>
                  </div>
                </div>
              </div>
            </div>




            <div className=''>
              <h3 className="font-semibold mb-3">Income</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly salary<br />$60,000/12</span>
                  <span>$5,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly side-gig<br />income</span>
                  <span>$1,500/month</span>
                </div>
                <div className="pt-2 border-t border-gray-300">
                  <div className="flex justify-between font-semibold">
                    <span>$6,500 monthly income</span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="border-b border-gray-400 mb-1">
                <span className="text-gray-900">$2,500</span>
              </div>
              <span className="text-gray-900">$6,500</span>
            </div>
            <span className="text-gray-900 mx-4">x 100 =</span>
            <span className="text-green-700 font-semibold">38% DTI</span>
          </div>

          <p className="text-gray-500 text-sm mt-4 italic">
            The above scenario is for illustrative purposes only.
          </p>
        </div> */}
      </section>

      {/* How to calculate monthly mortgage payments section */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          How to calculate monthly mortgage payments?
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it's a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Formula for calculating monthly mortgage payments
          </h2>
          
          <p className="text-gray-600 mb-4">
            The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here's the formula for calculating principal and interest yourself:
          </p>

          {/* Formula Display */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-gray-900">Monthly mortgage payments (M) = P x</span>
              <div className="mx-4">
                <div className="border-b border-gray-400 mb-1">
                  <span className="text-gray-900">r(1+r)<sup>n</sup></span>
                </div>
                <div>
                  <span className="text-gray-900">(1+r)<sup>n</sup>-1</span>
                </div>
              </div>
            </div>

            <div className="text-gray-700">
              <p className="mb-2">Where:</p>
              <ul className="space-y-2">
                <li>• M is monthly mortgage payments</li>
                <li>• P is the principal loan amount (the amount you borrow)</li>
                <li>
                  • r is the monthly interest rate
                  <div className="text-gray-500 ml-4 mt-1">
                    (annual interest rate divided by 12 and expressed as a decimal)
                    <div className="mt-1">
                      For example:
                      <br />
                      If the annual interest rate is 5%,
                      <br />
                      the monthly rate would be 0.05/12 = 0.00417 or .417%
                    </div>
                  </div>
                </li>
                <li>
                  • n is the total number of payments in months
                  <div className="text-gray-500 ml-4 mt-1">
                    For example:
                    <br />
                    for a 30-year loan: n = 30x12 = 360 months
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">Here's a simple example:</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-gray-900">P = $200,000</p>
                <p className="text-gray-900">r = 0.05/12 = 0.00417</p>
                <p className="text-gray-900">n = 30×12 = 360</p>
              </div>
              <div>
                <div className="mb-2">
                  <p className="text-gray-900">M = 200,000 x</p>
                  <div className="ml-4">
                    <p className="text-gray-900">0.00417 (1+0.00417)<sup>360</sup></p>
                    <div className="border-t border-gray-400 mt-1">
                      <p className="text-gray-900">(1+0.00417)<sup>360</sup> -1</p>
                    </div>
                  </div>
                </div>
                <p className="text-green-700 font-semibold">M = $1,074 per month</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 italic">
              The above example is for illustrative purposes only. Your actual monthly payment will differ.
            </p>
          </div>
        </div>
        <p className='text-[#017848]'>
        This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.


        </p>
      </section>

      
      
    </div>





    <div className="max-w-7xl mx-auto px-4 py-8">
     

      {/* Calculator Info Sections */}
      <div className="space-y-12 mb-16">
        <section>
          <h2 className="text-xl font-bold mb-4 text-[#292B29]">How to reduce your monthly mortgage payments?</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Extend the length of your mortgage</h3>
              <p className="text-gray-700">The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. In other words, extending the length of your mortgage is known as "stretching your loan term." This is why people often choose a 30-year fixed-rate mortgage over a 15 or 20-year term.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Increase your down payment</h3>
              <p className="text-gray-700">The lower your loan amount, the lower your monthly mortgage payments will be. If you're able to put at least 20% of the home price upfront, your down payment will help you avoid private mortgage insurance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Get a lower interest rate</h3>
              <p className="text-gray-700">Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#292B29]">Do you know your property tax rate?</h2>
          <p className="text-gray-700 mb-4">While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here's a helpful chart from Forbes breaking down the Census Bureau's 2021 American Community Survey 5-year estimate:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-800 text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Median Effective Property Tax Rate</th>
                  <th className="p-3 text-left">Mean Effective Property Tax Rate</th>
                  <th className="p-3 text-left">Median Home Value</th>
                  <th className="p-3 text-left">Median Property Taxes Paid</th>
                </tr>
              </thead>
              <tbody>
                {stateData.map((row, index) => (
                  <tr 
                    key={row.state}
                    className={`${index % 2 === 0 ? 'bg-emerald-50' : 'bg-white'} hover:bg-emerald-100`}
                  >
                    <td className="p-3 border-t text-[#292B29]">{row.state}</td>
                    <td className="p-3 border-t text-[#292B29]">{row.medianEffective}</td>
                    <td className="p-3 border-t text-[#292B29]">{row.meanEffective}</td>
                    <td className="p-3 border-t text-[#292B29]">{row.medianValue}</td>
                    <td className="p-3 border-t text-[#292B29]">{row.taxesPaid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#292B29]">How is Better's mortgage calculator different?</h2>
          <h3 className="text-lg font-semibold mb-2 text-[#292B29]">This mortgage calculator shows your payments with taxes and insurance</h3>
          <p className="text-gray-700 mb-4">
            The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and the department of fire. After your mortgage has been fully paid, you will still need to pay property taxes. If you neglect to pay property taxes, you run the risk of losing your home to your local tax authority.
          </p>
          <p className="text-gray-700">
            Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.
          </p>
        </section>
      </div>

      <div className="text-sm text-gray-600">
        <p>*See Better Real Estate discount terms and conditions</p>
        <p className="mt-2">**The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey's (PMMS) 30-year fixed-rate mortgage product with Better Mortgage's own offered rate for a comparable mortgage product between Jan '20 - Dec '20.</p>
      </div>



       {/* More Resources Section */}
       <h2 className="text-2xl font-bold text-gray-900 mb-8">More resources</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <FileText className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-[#292B29]">
            Get <span className="text-emerald-600">pre-approved</span> to see how much you can borrow
          </h3>
          <a href="#" className="text-emerald-600 font-medium block mb-2">Get started →</a>
          <span className="text-sm text-gray-600">Won't impact your credit</span>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <TrendingDown className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-[#292B29]">
            See today's rates in your area
          </h3>
          <a href="#" className="text-emerald-600 font-medium">See rates →</a>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <Calculator className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-[#292B29]">
            Find out your max homebuying budget
          </h3>
          <a href="#" className="text-emerald-600 font-medium">Try our mortgage calculator →</a>
        </div>
      </div>
    </div>
          
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MortgageCalculator;