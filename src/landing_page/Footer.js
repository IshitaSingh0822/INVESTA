import React from "react";
function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(245,245,245)"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo.png" style={{ width: "50%" }} />
          <p>
            &copy; 2010 - 2025, Investa Broking Ltd.<br></br>All rights
            reserved.
          </p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">About</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Products</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Pricing</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Referral programme</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Careers</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Investa.tech</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Press & media</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Investa cares (CSR)</a>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Contact</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Support portal</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">I-Connect blog</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">List of charges</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Downloads & resources</a>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Open an account</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">Fund transfer</a>
          <a href="" className="d-block text-muted mb-2 text-decoration-none">60 day challenge</a>
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize:"12px"}}>
      <p>
        Investa Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Investa Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Investa
        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
        any complaints pertaining to securities broking please write to
        complaints@investa.com, for DP related to dp@investa.com. Please ensure
        you carefully read the Risk Disclosure Document as prescribed by SEBI |
        ICF
      </p>

      <p>
        {" "}
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>
      <p> Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p>
        {" "}
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p>
        {" "}
        India's largest broker based on networth as per NSE. NSE broker
        factsheet
      </p>
      <p>
        {" "}
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Investa and offering such services, please create a ticket here.
      </p>
      <p>
        *Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
        (Composite) License No CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products.
      </p>
      </div>
      <div className="mt-4 pt-3 pb-4">
          <div className="d-flex flex-wrap justify-content-center gap-3 text-muted"style={{ fontSize: "13px" }}>
            <a href="#" className="text-decoration-none text-muted">NSE</a>
            <a href="#" className="text-decoration-none text-muted">BSE</a>
            <a href="#" className="text-decoration-none text-muted">MCX</a>
            <a href="#" className="text-decoration-none text-muted">Terms & conditions</a>
            <a href="#" className="text-decoration-none text-muted">Policies & procedures</a>
            <a href="#" className="text-decoration-none text-muted">Privacy policy</a>
            <a href="#" className="text-decoration-none text-muted">Disclosure</a>
            <a href="#" className="text-decoration-none text-muted">For investor's attention</a>
            <a href="#" className="text-decoration-none text-muted">Investor charter</a>
          </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
