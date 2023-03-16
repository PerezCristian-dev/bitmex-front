import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "black",
        color: "white",
        padding: "40px 40px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <p>
        BitMEX is a P2P crypto-products trading platform. BitMEX and the mobile
        apps issued under BMEX are wholly owned and operated by HDR Global
        Trading Limited, a Republic of Seychelles incorporated entity or its
        relevant authorised affiliates. Trading in cryptocurrency derivatives
        involves significant risks. Please consider whether using BitMEX is
        appropriate for you. Please read our Terms of Service, Risk Disclosure
        Statement and Privacy Notice. US Persons are prohibited from accessing
        the services of the BitMEX trading platform. Cryptocurrency charts by
        TradingView.
      </p>
      <img
        src="../../bitmex-logo-v2-alt-white.png"
        style={{ height: "30px" }}
      />
    </div>
  );
};
