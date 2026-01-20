import React from "react";
function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
            <a href='' style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
            <ul className='text-muted' style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply. </li>
                <li>For NRI account (non-PIS), 0.5% or ₹100 per excuted order for equity (whichever is lower).</li>
                <li>For NRI account (PIS), 0.5% or ₹200 per excuted order for equity (whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per excuted order instead of ₹20 per excuted order.</li>

            </ul>
        </div>
        <div className="col-4 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a>
            <ul
            className="text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
          >
            <li>Account opening (Equity): ₹0</li>
            <li>Account opening (Commodity): ₹0</li>
            <li>Annual maintenance charges (AMC): ₹0</li>
            <li>Equity delivery brokerage: ₹0</li>
            <li>Equity intraday brokerage: ₹20 per executed order</li>
            <li>F&O brokerage: ₹20 per executed order</li>
            <li>DP charges: ₹15.34 per scrip (on sell)</li>
            <li>Payment gateway charges: Nil</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
