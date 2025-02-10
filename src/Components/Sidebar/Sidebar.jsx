import React, { useEffect, useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { CgShapeHexagon } from "react-icons/cg";
import { FaBell, FaGamepad, FaWallet } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HiMiniTicket } from "react-icons/hi2";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { PiSidebarSimpleLight } from "react-icons/pi";

export default function Sidebar({ handleLogout }) {
  const navigate = useNavigate();
  const [closeSidebar, setCloseSidebar] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setCloseSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let sidebarMenu = [
    {
      General: [
        {
          label: "Dashboard",
          icon: <MdSpaceDashboard size={20} />,
          to: "/dashboard",
        },
        {
          label: "Transfers",
          icon: <BsArrowUpRightCircleFill size={20} />,
          to: "/transfers",
        },
        {
          label: "Payments",
          icon: <BiSolidDollarCircle size={25} />,
          to: "/payments",
        },
        {
          label: "Games",
          icon: <FaGamepad size={25} />,
          to: "/games",
        },
        {
          label: "Tickets",
          icon: <HiMiniTicket size={25} />,
          to: "/tickets",
        },
      ],
      Personal: [
        {
          label: "Wallet",
          icon: <FaWallet size={20} />,
          to: "/wallet",
        },
        {
          label: "Messages",
          icon: <FaMessage size={20} />,
          to: "/messages",
        },
        {
          label: "Notifications",
          icon: <FaBell size={25} />,
          to: "/notifications",
        },
        {
          label: "Settings",
          icon: <CgShapeHexagon size={25} />,
          to: "/settings",
        },
      ],
    },
  ];
  return !closeSidebar ? (
    <div className="bgForSidebar">
      <div className="sidebar">
        <div className="mainLogo">
          <div className="wallete">
            <h3>
              <FaWallet />
            </h3>
          </div>
          <div>
            <h3>CRED</h3>
          </div>
          <div
            className="sidebarIcon"
            onClick={() => {
              setCloseSidebar((prev) => !prev);
            }}
          >
            <PiSidebarSimpleLight width={50} height={50} />
          </div>
        </div>
        <div className="mainDivOfList">
          {sidebarMenu.map((ele, i) => {
            return (
              <div key={i} className="sidebarOptionContainer">
                <h5 className="titleOfOptions">
                  {Object.keys(ele)[0].toUpperCase()}
                </h5>
                {ele.General.map((ele, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        navigate(ele?.to);
                      }}
                      className="sidebarMenuContainer"
                    >
                      <div
                        className={`${
                          ele?.to === location?.pathname
                            ? "logoLabelActive"
                            : "logoLabel"
                        }`}
                      >
                        <span className="icon">{ele.icon}</span>
                        <span>{ele.label}</span>
                      </div>
                    </div>
                  );
                })}
                <h5 className="titleOfOptions">
                  {Object.keys(ele)[1].toUpperCase()}
                </h5>
                {ele.Personal.map((ele, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => navigate(ele.to)}
                      className="sidebarMenuContainer"
                    >
                      <div
                        className={`${
                          ele?.to === location?.pathname
                            ? "logoLabelActive"
                            : "logoLabel"
                        }`}
                      >
                        <span className="icon">{ele.icon}</span>
                        <span>{ele.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="cashbackContainer">
          <div className="labelCashback">MONTHLY CASHBACK</div>
          <div className="doller">$215.50</div>
        </div>
        <div
          onClick={() => {
            handleLogout();
          }}
          className="logoutContainer"
        >
          <div className="logoutLogo">
            <RiLogoutBoxLine />
          </div>
          <div className="logoutLabel">
            <div>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bgForSidebarClosed">
      <div
        className="sidebarIconClosed"
        onClick={() => {
          setCloseSidebar((prev) => !prev);
        }}
      >
        <PiSidebarSimpleLight />
      </div>
      {sidebarMenu.map((ele, i) => {
        return (
          <div key={i} className="sidebarOptionContainer">
            {ele.General.map((ele, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    navigate(ele?.to);
                  }}
                  className="sidebarMenuContainer"
                >
                  <div
                    className={`${
                      ele?.to === location.pathname
                        ? "logoLabelActive"
                        : "logoLabel"
                    }`}
                  >
                    <span className="icon">{ele.icon}</span>
                  </div>
                </div>
              );
            })}

            {ele.Personal.map((ele, i) => {
              return (
                <div
                  key={i}
                  onClick={() => navigate(ele.to)}
                  className="sidebarMenuContainer"
                >
                  <div
                    className={`${
                      ele?.to === location.pathname
                        ? "logoLabelActive"
                        : "logoLabel"
                    }`}
                  >
                    <span className="icon">{ele.icon}</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div
        className="logoutLogoClosed"
        onClick={() => {
          handleLogout();
        }}
      >
        <RiLogoutBoxLine size={20} />
      </div>
    </div>
  );
}
