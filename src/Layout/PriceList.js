import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
const PriceList = (props) => {
  return (
    <>
      <Helmet>
        <title>Price, Basic Sale value of Sobha City Sector 108</title>
        <meta
          name='description'
          content='Find the premium price list, Basic Sale Value, Preferred Location Charges and other charges of Tower A1 & B1 of Sobha city Sector 108, Gurgaon.'
        />
        <link rel='canonical' href='/price-list.html' />
      </Helmet>
      <Header />
      <section className='inner_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>{`Price List -  ${window.name} Sector 108`}</h1>
              <table className='table table-bordered'>
                <tbody>
                  <tr>
                    <td className='topplan' colSpan='2'>
                      25 x 4 Payment Plan
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B4
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>

                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>16,933,215</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>846,660</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>17,779,875</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Green Facing - Rs. 350 / sq.ft. to be added to BSV</td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>Service Charges Including GST in Rs.</td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>578,258</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,358,133</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs.</td>
                    <td>300,000 </td>
                  </tr>
                  <tr>
                    <td>
                      Booking Amount Payable within 30 Days from EOI Date (Less
                      EOI Amount Paid)
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from EOI Date</td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>Payable on or Before 31st March 2021</td>
                    <td>5% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Basement Roof Slab or 31st July 2021,
                      whichever is later
                    </td>
                    <td>9% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of First Floor Roof Slab or 30th November
                      2021, whichever is later
                    </td>
                    <td>8% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Fifth Floor Roof Slab or 31st March 2022,
                      whichever is later
                    </td>
                    <td>8% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Ninth Floor Roof Slab or 31st July 2022,
                      whichever is later
                    </td>
                    <td>8% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Thirteenth Floor Roof Slab or 30th
                      November 2022, whichever is later
                    </td>
                    <td>8% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab or 31st March 2023,
                      whichever is later{' '}
                    </td>
                    <td>9% </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc. or 31st July 2023, whichever is later
                    </td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Flooring in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc. or 30th November 2023, whichever is later
                    </td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Doors & Windows in all the
                      Apartments Excluding Balconies, Utilities, Common Area,
                      Shafts, Ducts, etc. or 31st March 2024, whichever is later
                    </td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Offer of Possession</td>
                    <td>5% of A 100% of B</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B4
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,824,138</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST) </td>
                    <td>991,207</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST) </td>
                    <td>20,815,345</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Green Facing - Rs. 350 / sq.ft. to be added to BSV</td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>Service Charges Including GST in Rs.</td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>636,690</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration & Stamp Duty in
                        Rs. (C = A+B){' '}
                      </strong>
                    </td>
                    <td>
                      <strong>21,452,035</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs.</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Booking Amount Payable within 30 Days from EOI Date (Less
                      EOI Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable on or Before 31st March 2021</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Basement Roof Slab or 31st July 2021,
                      whichever is later
                    </td>
                    <td>9%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of First Floor Roof Slab or 30th November
                      2021, whichever is later
                    </td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Fifth Floor Roof Slab or 31st March 2022,
                      whichever is later{' '}
                    </td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Ninth Floor Roof Slab or 31st July 2022,
                      whichever is later
                    </td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Thirteenth Floor Roof Slab or 30th
                      November 2022, whichever is later
                    </td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab or 31st March 2023,
                      whichever is later{' '}
                    </td>
                    <td>9%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc. or 31st July 2023, whichever is later
                    </td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Flooring in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc. or 30th November 2023, whichever is later
                    </td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Doors & Windows in all the
                      Apartments Excluding Balconies, Utilities, Common Area,
                      Shafts, Ducts, etc. or 31st March 2024, whichever is later
                    </td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Offer of Possession</td>
                    <td>5% of A 100% of B</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>Notes : -</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <ul>
                        <li>
                          EDC & IDC are pro-rated per Unit as applicable, any
                          revision would be charged on pro-rata basis from the
                          Customers.{' '}
                        </li>
                        <li>
                          {' '}
                          Goods and Service Tax (GST) is as per the prevailing
                          regulation & rates and subject to change.{' '}
                        </li>
                        <li>
                          {' '}
                          Electricity, Water, Sewerage and other Infrastructure
                          Charges are yet to be ascertained and will be payable
                          by the Customers at the time of Handover.
                        </li>
                        <li>
                          Registration and Stamp duty charges are not included
                          in above pricing & shall be payable by the Customers
                          at the time of possession
                        </li>
                        <li>
                          Demand note for payment will be on the basis of
                          completion of the milestone attributed to the
                          particular Tower / Wing in the project in which the
                          apartment is located.
                        </li>
                        <li>
                          Delayed Payment Interest charged would attract
                          additional applicable GST.
                        </li>
                        <li>
                          {' '}
                          Any other statutory charges which may be imposed by
                          the authorities from time to time will also be payable
                          by the Customers at actual.
                        </li>
                        <li>
                          {' '}
                          Basic Sale Value is inclusive of One Car Parking
                          Space.
                        </li>
                        <li> SBA is subject to change.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className='topplan' colSpan='2'>
                      Possession Linked Payment Plan
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>a</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,381.01</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>12,302,037</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,476,244</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>13,778,281</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>383,921</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>177,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>276,202</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,132,123</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>14,910,404</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>80% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A1 &amp; B1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>15,244,171</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,829,301</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>17,073,472</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>475,739</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,348,997</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,422,469</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>80% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>17,846,733</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,141,608</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>19,988,341</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>556,959</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,488,649</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>21,476,990</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>80% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,294,553</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,315,346</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>21,609,899</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B){' '}
                      </strong>
                    </td>
                    <td>
                      <strong>23,131,745</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>80% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>21,812,740</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,617,529</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,430,269</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Preferred Location Charges</strong>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,081,433</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>80% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>a</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,381.01</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>12,302,037</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,476,244</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>13,778,281</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>383,921</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>177,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>276,202</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,132,123</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>14,910,404</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>80% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A2 &amp; B2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>15,244,171</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,829,301</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>17,073,472</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>475,739</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,348,997</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,422,469</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>80% of A </td>
                  </tr>

                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>17,846,733</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,141,608</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>19,988,341</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>556,959</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,488,649</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>21,476,990</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>80% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,294,553</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,315,346</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>21,609,899</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,131,745</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>80% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>21,812,740</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,617,529</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,430,269</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,081,433</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>80% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>Note : -</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <ul>
                        <li>
                          EDC &amp; IDC are pro-rated per Unit as applicable,
                          any revision would be charged on pro-rata basis from
                          the Customers.
                        </li>
                        <li>
                          Goods and Service Tax is as per the prevailing
                          regulations &amp; rates and subject to change.
                        </li>
                        <li>
                          Electricity, Water, Sewerage and other Infrastructure
                          Deposit are yet to be ascertained and will be payable
                          by the Customers at the time of possession.
                        </li>
                        <li>
                          Registration and Stamp duty charges are not included
                          in above pricing &amp; shall be payable by the
                          Customers at the time of possession.
                        </li>
                        <li>
                          Demand note for payment will be on the basis of
                          completion of the milestone attributed to the
                          particular Tower / Wing in the project in which the
                          apartment is located.
                        </li>
                        <li>
                          Any other statutory charges which may be imposed by
                          the authorities from time to time will also be payable
                          by the Customers at actual.
                        </li>
                        <li>
                          Basic Sale Value is inclusive of One Car Parking
                          Space.
                        </li>
                        <li>SBA is subject to change.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan'>
                      Special Payment Plan
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan='2'
                      className='topplan1
          '
                    >
                      Tower B3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>16,933,215</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>846,660</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs (A = BSV+GST)</td>
                    <td>17,779,875</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>578,258</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,358,133</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 90 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B)
                    </td>
                    <td>40% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,824,138</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>991,207</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>20,815,345</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Preferred Location Charges</strong>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>636,690</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>21,452,035</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 90 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B)
                    </td>
                    <td>40% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,709,133</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,365,096</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>22,074,229</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,596,075</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 90 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 90 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>40% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>22,281,428</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,673,771</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,955,199</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lakelet facing - Rs. 500 / sq.ft. to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,606,363</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 90 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 90 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>40% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C4
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,709,133</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,365,096</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>22,074,229</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,596,075</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 90 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 90 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>40% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C4
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>22,281,428</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,673,771</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,955,199</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lakelet facing - Rs. 500 / sq.ft. to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,606,363</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 90 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 90 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>30% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>40% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>Note : -</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <ul>
                        <li>
                          EDC &amp; IDC are pro-rated per Unit as applicable,
                          any revision would be charged on pro-rata basis from
                          the Customers.
                        </li>
                        <li>
                          Goods and Service Tax is as per the prevailing
                          regulations &amp; rates and subject to change.
                        </li>
                        <li>
                          Service Charges are as per the prevailing rates and
                          subject to change.
                        </li>
                        <li>
                          Electricity, Water, Sewerage and other Infrastructure
                          Charges are yet to be ascertained and will be payable
                          by the Customers at the time of possession.
                        </li>
                        <li>
                          Registration and Stamp duty charges are not included
                          in above pricing &amp; shall be payable by the
                          Customers at the time of possession.
                        </li>
                        <li>
                          Demand note for payment will be on the basis of
                          completion of the milestone attributed to the
                          particular Tower / Wing in the project in which the
                          apartment is located.
                        </li>
                        <li>
                          Any other statutory charges which may be imposed by
                          the authorities from time to time will also be payable
                          by the Customers at actual.
                        </li>
                        <li>
                          Basic Sale Value is inclusive of Two Car Parking
                          Spaces.
                        </li>
                        <li>SBA is subject to change.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan'>
                      Construction Linked Payment Plan
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment </td>
                    <td>a</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,381.01</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>12,302,037</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,476,244</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>13,778,281</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>383,921</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>177,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>276,202</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,132,123</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>14,910,404</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>72.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 31st March 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A1 &amp; B1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>Unit Particulars</td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>15,244,171</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,829,301</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>17,073,472</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>475,739</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,348,997</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,422,469</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>72.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 31st March 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>17,846,733</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,141,608</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>19,988,341</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>556,959</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,488,649</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>21,476,990</strong>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>72.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 31st March 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,294,553</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,315,346</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>21,609,899</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,131,745</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>72.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 31st March 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C1
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>21,812,740</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,617,529</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,430,269</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,081,433</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>72.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 31st March 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>a</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,381.01</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>12,302,037</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,476,244</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>13,778,281</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>383,921</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>177,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>276,202</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,132,123</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>14,910,404</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date</td>
                    <td>60% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th June 2020,
                      whichever is later
                    </td>
                    <td>12.5% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 30th September 2020, whichever is later
                    </td>
                    <td>12.5% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>5% of A</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower A2 &amp; B2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>15,244,171</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>1,829,301</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>17,073,472</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>475,739</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,348,997</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,422,469</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>60% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th June 2020,
                      whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 30th September 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>17,846,733</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,141,608</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>19,988,341</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>556,959</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,488,649</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>21,476,990</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>60% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th June 2020,
                      whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 30th September 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,294,553</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,315,346</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>21,609,899</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,131,745</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>60% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th June 2020,
                      whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 30th September 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>21,812,740</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,617,529</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,430,269</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 500 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,081,433</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid){' '}
                    </td>
                    <td>10% of A </td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 Days from EOI Date{' '}
                    </td>
                    <td>100% </td>
                  </tr>
                  <tr>
                    <td>Amount Payable within 90 Days from EOI Date </td>
                    <td>60% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th June 2020,
                      whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc. / 30th September 2020, whichever is later{' '}
                    </td>
                    <td>12.5% of A </td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; 100%
                      Other Charges (B) excluding EDC &amp; IDC{' '}
                    </td>
                    <td>5% of A </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>b</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>1,711.29</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>16,933,215</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>846,660</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>17,779,875</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>342,258</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>578,258</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>18,358,133</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from Booking Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 120 Days from Booking Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>On Completion of Basement Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of First Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Fifth Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Ninth Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Thirteenth Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc.
                    </td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>On Offer of Possession - Basic Sale Value (A)</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>On Offer of Possession - Other Charges (B)</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower B3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>c</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,003.45</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,824,138</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>991,207</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>20,815,345</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Green facing - Rs. 350 / sq.ft. - to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>400,690</td>
                  </tr>
                  <tr>
                    <td>
                      Service Charges (Charges for Electricity, Water, Sewerage,
                      etc.) including GST in Rs.
                    </td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>636,690</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>21,452,035</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs. (EOI)</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td>
                      Amount Payable within 30 Days from EOI Date (Less EOI
                      Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from Booking Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 120 Days from Booking Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>On Completion of Basement Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of First Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Fifth Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Ninth Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Thirteenth Floor Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts, Ducts
                      etc.
                    </td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>On Offer of Possession - Basic Sale Value (A)</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>On Offer of Possession - Other Charges (B)</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,709,133</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,365,096</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>22,074,229</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lakelet facing - Rs. 500 / sq.ft. to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>Service Charges including GST in Rs.</td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,596,075</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs.</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Booking Amount Payable within 30 Days from EOI Date (Less
                      Expression of Interest Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 days from EOI date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from EOI Date</td>
                    <td>20% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Ninth Floor Roof Slab / 31st July 2020,
                      whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Thirteenth Floor Roof Slab / 30th
                      November 2020, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Seventeenth Floor Roof Slab / 31st March
                      2021, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Twenty First Floor Roof Slab / 31st July
                      2021, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th November 2021,
                      whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc. / 31st March 2022, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C3
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>22,281,428</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,673,771</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,955,199</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lakelet facing - Rs. 500 / sq.ft. to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>Service Charges including GST in Rs.</td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>26,606,363</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs.</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Booking Amount Payable within 30 Days from EOI Date (Less
                      Expression of Interest Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 days from EOI date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from EOI Date</td>
                    <td>20% of A</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Ninth Floor Roof Slab / 31st July 2020,
                      whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Thirteenth Floor Roof Slab / 30th
                      November 2020, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Seventeenth Floor Roof Slab / 31st March
                      2021, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Twenty First Floor Roof Slab / 31st July
                      2021, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Terrace Roof Slab / 30th November 2021,
                      whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc. / 31st March 2022, whichever is later
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C4
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>d</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,072.90</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>19,709,133</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,365,096</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>22,074,229</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lakelet facing - Rs. 500 / sq.ft. to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>576,266</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>Service Charges including GST in Rs.</td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>414,580</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,521,846</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value Excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>23,596,075</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs.</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Booking Amount Payable within 30 Days from EOI Date (Less
                      Expression of Interest Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 days from EOI date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 120 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>On Completion of Foundation Works</td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Basement Roof Slab</td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Completion of First Floor Roof Slab</td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Fifth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Ninth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Thirteenth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Seventeenth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Twenty First Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc.
                    </td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Tower C4
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Unit Particulars</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of Apartment</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Saleable Built-up Area in sq.ft. (SBA)</td>
                    <td>2,343.44</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Basic Sale Value</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value in Rs. (BSV)</td>
                    <td>22,281,428</td>
                  </tr>
                  <tr>
                    <td>Goods and Services Tax in Rs. (GST)</td>
                    <td>2,673,771</td>
                  </tr>
                  <tr>
                    <td>Basic Sale Value with GST in Rs. (A = BSV+GST)</td>
                    <td>24,955,199</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Preferred Location Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lakelet facing - Rs. 500 / sq.ft. to be added to BSV
                    </td>
                    <td>As Applicable</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <strong>Other Charges</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      External &amp; Infrastructure Development Charges (EDC
                      &amp; IDC) in Rs.
                    </td>
                    <td>651,476</td>
                  </tr>
                  <tr>
                    <td>Clubhouse Charges including GST in Rs.</td>
                    <td>295,000</td>
                  </tr>
                  <tr>
                    <td>Service Charges including GST in Rs.</td>
                    <td>236,000</td>
                  </tr>
                  <tr>
                    <td>Maintenance Deposit in Rs.</td>
                    <td>468,688</td>
                  </tr>
                  <tr>
                    <td>Total Other Charges in Rs. (B)</td>
                    <td>1,651,164</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Total Sale Value excluding Registration &amp; Stamp Duty
                        in Rs. (C = A+B)
                      </strong>
                    </td>
                    <td>
                      <strong>26,606,363</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='topplan1'>
                      Payment Schedule
                    </td>
                  </tr>
                  <tr>
                    <td>Expression of Interest Amount in Rs.</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td>
                      Booking Amount Payable within 30 Days from EOI Date (Less
                      Expression of Interest Amount Paid)
                    </td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>
                      EDC &amp; IDC Charges Payable within 30 days from EOI date
                    </td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Payable within 90 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>Payable within 120 Days from EOI Date</td>
                    <td>10% of A</td>
                  </tr>
                  <tr>
                    <td>On Completion of Foundation Works</td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Basement Roof Slab</td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Completion of First Floor Roof Slab</td>
                    <td>6%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Fifth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Ninth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Thirteenth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Seventeenth Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Twenty First Floor Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>On Completion of Terrace Roof Slab</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>
                      On Completion of Internal Plastering in all the Apartments
                      Excluding Balconies, Utilities, Common Area, Shafts,
                      Ducts, etc.
                    </td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>
                      On Offer of Possession - Basic Sale Value (A) &amp; Other
                      Charges (B) excluding EDC &amp; IDC
                    </td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>Notes : -</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <ul>
                        <li>
                          EDC &amp; IDC are pro-rated per Unit as applicable,
                          any revision would be charged on pro-rata basis from
                          the Customers.
                        </li>
                        <li>
                          Goods and Service Tax is as per the prevailing
                          regulations &amp; rates and subject to change.
                        </li>
                        <li>
                          Service Charges are as per the prevailing rates and
                          subject to change
                        </li>
                        <li>
                          Electricity, Water, Sewerage and other Infrastructure
                          Charges are yet to be ascertained and will be payable
                          by the Customers at the time of possession.
                        </li>
                        <li>
                          Registration and Stamp duty charges are not included
                          in above pricing &amp; shall be payable by the
                          Customers at the time of possession.
                        </li>
                        <li>
                          Demand note for payment will be on the basis of
                          completion of the milestone attributed to the
                          particular Tower / Wing in the project in which the
                          apartment is located.
                        </li>
                        <li>
                          {' '}
                          Any other statutory charges which may be imposed by
                          the authorities from time to time will also be payable
                          by the Customers at actual.
                        </li>
                        <li>
                          Basic Sale Value is inclusive of Two Car Parking
                          Spaces.
                        </li>
                        <li>SBA is subject to change.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <DecisionCorner />
      <Footer />
    </>
  );
};

export default PriceList;
