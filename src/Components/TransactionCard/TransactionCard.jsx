import moment from "moment";
import React from "react";
import "./TransactionCard.css";
export default function TransactionCard({
  date,
  time,
  amount,
  benefitiaryName,
  transactionType,
  logo,
  currency,
}) {
  return (
    <div className="transCardContainer">
      <div className="logoTransCard">
        {logo ||
          benefitiaryName.toUpperCase().split("")[0] +
            benefitiaryName.toUpperCase().split("")[1] || "AA"}
      </div>
      <div className="transBenefitiaryAndDate">
        <div className="transCardBenefitiary">{benefitiaryName || ""}</div>
        <div className="transCardDate">
          {moment(date).format("DD MMM")} <span>{time}</span>
        </div>
      </div>
      <div className="transCardAmountContainer">
        <div className="transCardAmount">
          {amount} {currency}
        </div>
        <div className="transCardTransType">{transactionType}</div>
      </div>
    </div>
  );
}
