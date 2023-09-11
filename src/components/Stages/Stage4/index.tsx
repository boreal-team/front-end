/* eslint-disable @typescript-eslint/no-redeclare */
import BrIcon from "../../../assets/br-flag.svg";
import EthIcon from "../../../assets/eth-icon.svg";
import nft from "../../../assets/nft.png";
import PolidoStakeBanner from "@lidofinance/polygon-sdk-banner";
import "./styles.css";

const Stage4 = () => {
  return (
    <>
      <div className="content-container larger-container">
        <div className="display-row">
          <div>
            <img alt="" src={nft} />
          </div>
          <div className="column-cards">
            <div className="card-container">
              <div className="card-header">
                <div className="card-title">Liquid Pool</div>
              </div>
              <div
                style={{ marginTop: "32px" }}
                className="info-main-container"
              >
                <div className="liquid-pool-container">
                  <div className="liquid-pool-left">
                    <img alt="" src={BrIcon} style={{ width: "22px" }} />
                    <span>WDREXtr</span>
                  </div>
                  <div style={{ color: "#9b9b98", fontWeight: 600 }}>
                    Balance: <span style={{ color: "white" }}>10000</span>
                  </div>
                </div>
                <hr className="solid-line bd-white" />
                <div className="liquid-pool-container">
                  <div className="liquid-pool-left">
                    <img alt="" src={EthIcon} style={{ width: "22px" }} />
                    <span>wstETH</span>
                  </div>
                  <div style={{ color: "#9b9b98", fontWeight: 600 }}>
                    Balance: <span style={{ color: "white" }}>1.29</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card-header">
                <div className="card-title">Unredeemed Fees</div>
              </div>
              <div
                style={{ marginTop: "32px" }}
                className="info-main-container"
              >
                <div className="liquid-pool-container">
                  <div className="liquid-pool-left">
                    <img alt="" src={BrIcon} style={{ width: "22px" }} />
                    <span>WDREXtr</span>
                  </div>
                  <div style={{ color: "#9b9b98", fontWeight: 600 }}>
                    Balance: <span style={{ color: "white" }}>0</span>
                  </div>
                </div>
                <hr className="solid-line" />
                <div className="liquid-pool-container">
                  <div className="liquid-pool-left">
                    <img alt="" src={EthIcon} style={{ width: "22px" }} />
                    <span>wstETH</span>
                  </div>
                  <div style={{ color: "#9b9b98", fontWeight: 600 }}>
                    Balance: <span style={{ color: "white" }}>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stage4;
