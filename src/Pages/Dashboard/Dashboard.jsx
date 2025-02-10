import React from "react";
import "./Dashboard.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TransactionCard from "../../Components/TransactionCard/TransactionCard";

export default function Dashboard() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const transactions = [
    {
      today: [
        {
          date: "05/02/2025",
          time: "06:09AM",
          benefitiaryName: "ashish kumar",
          transactionType: "UPI",
          amount: 1000,
          currency: "INR",
          logo: "",
        },
        {
          date: "05/02/2025",
          time: "06:09AM",
          benefitiaryName: "ashish shinde",
          transactionType: "IMPS",
          amount: -2000,
          currency: "USD",
          logo: "",
        },
        {
          date: "05/02/2025",
          time: "06:09AM",
          benefitiaryName: "eknath shinde",
          transactionType: "UPI",
          amount: 3000,
          currency: "INR",
          logo: "",
        },
      ],
      yesterday: [
        {
          date: "04/02/2025",
          time: "06:09AM",
          benefitiaryName: "ash win",
          transactionType: "Shopping",
          amount: 30000,
          currency: "USD",
          logo: "",
        },
        {
          date: "04/02/2025",
          time: "06:09AM",
          benefitiaryName: "roh man",
          transactionType: "fuel",
          amount: 3023,
          currency: "USD",
          logo: "",
        },
        {
          date: "04/02/2025",
          time: "06:09AM",
          benefitiaryName: "shankar",
          transactionType: "Rent",
          amount: 5000,
          currency: "INR",
          logo: "",
        },
      ],
      lastWeek: [
        {
          date: "30/01/2025",
          time: "06:09AM",
          benefitiaryName: "",
          transactionType: "",
          amount: 0,
          currency: "",
          logo: "",
        },
        {
          date: "29/01/2025",
          time: "06:09AM",
          benefitiaryName: "",
          transactionType: "",
          amount: 0,
          currency: "",
          logo: "",
        },
        {
          date: "28/01/2025",
          time: "06:09AM",
          benefitiaryName: "",
          transactionType: "",
          amount: 0,
          currency: "",
          logo: "",
        },
        // {
        //   date: "26/01/2025",
        //   time: "06:09AM",
        //   benefitiaryName: "",
        //   transactionType: "",
        //   amount: 0,
        //   currency: "",
        //   logo: "",
        // },
        // {
        //   date: "24/01/2025",
        //   time: "06:09AM",
        //   benefitiaryName: "",
        //   transactionType: "",
        //   amount: 0,
        //   currency: "",
        //   logo: "",
        // },
        // {
        //   date: "22/01/2025",
        //   time: "06:09AM",
        //   benefitiaryName: "",
        //   transactionType: "",
        //   amount: 0,
        //   currency: "",
        //   logo: "",
        // },
      ],
    },
  ];

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [50, 70, 40, 90, 60],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ($)",
        data: [500, 800, 600, 1200, 900, 1400],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Adds smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const optionsBar = {
    plugins: { legend: { position: "top" } },
    scales: {
      x: {
        stacked: true,
      },
      y: { stacked: true },
    },
  };

  const dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Product A",
        data: [40, 50, 60, 70, 80],
        backgroundColor: "#98D8EF",
        barThickness: 50,
      },
      {
        label: "Product B",
        data: [20, 30, 50, 60, 70],
        backgroundColor: "#A6CDC6",
        barThickness: 50,
      },
      {
        label: "Product C",
        data: [10, 20, 40, 50, 60],
        barThickness: 50,
        backgroundColor: "#577BC1",
      },
      {
        label: "Product D",
        data: [30, 40, 70, 80, 90],
        barThickness: 50,
        backgroundColor: "#BAD8B6",
      },
    ],
  };
  return (
    <div className="dashContainer">
      <div className="firstContainer">
        <div className="first">
          {/* <Bar data={data} options={options} /> */}
        </div>
        <div className="second">
          <Line data={data} options={options} />
        </div>
        <div className="three">
          <Line data={dataLine} options={optionsLine} />
        </div>
      </div>
      <div className="secondContainer">
        <div className="four">
          <h4>Transactions</h4>
          <div className="transactionContainer">
            {transactions.map((transaction, index) => (
              <div key={index}>
                <h5>{Object.keys(transaction)[0].toUpperCase()}</h5>
                {transaction[Object.keys(transaction)[0]].map((trans, i) => (
                  <div key={i}>
                    <TransactionCard
                      date={trans.date}
                      time={trans.time}
                      amount={trans.amount}
                      benefitiaryName={trans.benefitiaryName}
                      transactionType={trans.transactionType}
                      logo={trans.logo}
                      currency={trans.currency}
                    />
                  </div>
                ))}
                <h5>{Object.keys(transaction)[1].toUpperCase()}</h5>

                {transaction[Object.keys(transaction)[1]].map((trans, i) => (
                  <div key={i}>
                    <TransactionCard
                      date={trans.date}
                      time={trans.time}
                      amount={trans.amount}
                      benefitiaryName={trans.benefitiaryName}
                      transactionType={trans.transactionType}
                      logo={trans.logo}
                      currency={trans.currency}
                    />
                  </div>
                ))}

                <h5>{Object.keys(transaction)[2].toUpperCase()}</h5>
                {transaction[Object.keys(transaction)[2]].map((trans, i) => (
                  <div key={i}>
                    <TransactionCard
                      date={trans.date}
                      time={trans.time}
                      amount={trans.amount}
                      benefitiaryName={trans.benefitiaryName}
                      transactionType={trans.transactionType}
                      logo={trans.logo}
                      currency={trans.currency}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="five">
          <Bar data={dataBar} options={optionsBar} />
        </div>
      </div>
    </div>
  );
}
