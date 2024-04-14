// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Shipping_page.css";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const Shipping_page = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="shipping-container">
        <div className="shipping-child">
          <h1>Enter your shipping address</h1>
          <div className="content">
            <div className="div">
              <label className="required">Email</label> <br />
              <input type="email" required placeholder="Enter your email" />
            </div>
            <div className="div">
              <label className="required">Conform email</label> <br />
              <input
                type="email"
                required
                placeholder="Enter your conform email"
              />
            </div>
            <div className="div2">
              <label className="required">Country</label>
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="country"
              />
            </div>
            <div className="div">
              <label className="required">Street address</label> <br />
              <input
                type="text"
                required
                placeholder="Enter your Street address"
              />
            </div>

            <div className="div">
              <label className="required">Apt/Suite/Other (optional)</label>
              <br />
              <input
                type="text"
                required
                placeholder="Enter your Street address"
              />
            </div>

            <div className="div">
              <label className="required">Postal code</label> <br />
              <input
                type="text"
                required
                placeholder="Enter your Postal code"
              />
            </div>

            <div className="div">
              <label className="required">City</label> <br />
              <select name="country" id="country">
                <option value="mp" className="widthme">
                  M.P.
                </option>
                <option value="up" className="widthme">
                  U.P.
                </option>
              </select>
            </div>
          </div>
          <div className="div-btn">
            <div className="inner-btn">
              <a href="/payment">
              <h2 className="checkoutt">Payment</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping_page;
