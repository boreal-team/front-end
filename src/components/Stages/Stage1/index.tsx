import { useEffect, useState } from "react";
import TransferIcon from "../../../assets/transfer-icon.svg";
import BrFlag from "../../../assets/br-flag.svg";
import MaticIcon from "../../../assets/matic-icon.svg";
import EthIcon from "../../../assets/eth-icon.svg";
import ButtonComponent from "../../../components/Button";
import "./styles.css";
import { useAccount, useBalance, useToken, useNetwork } from "wagmi";
import axios from "axios";

const Stage1 = () => {
  const [balanceDREX, setBalanceDREX] = useState();
  const [drexAmount, setDrexAmount] = useState<number>(0);
  const account: any = useAccount();
  const { chain } = useNetwork();

  const balanceNative = useBalance({
    address: account.address,
  });

  const tokenLachain = useToken({
    address: "0x4Eb845fc5eedcf3f1a7925F47372a3a9aa437adE",
  });

  const tokenGoerli = useToken({
    address: "0x438db7329230cCACBb5C02ee5b01b300eb13C633",
  });

  const tokenMumbai = useToken({
    address: "0xed21ad555f7e1d05a91938744059ecaedf9b898c",
  });

  const balanceLaChain = useBalance({
    address: account.address,
    token: "0x4Eb845fc5eedcf3f1a7925F47372a3a9aa437adE",
  });

  const balanceGoerli = useBalance({
    address: account.address,
    token: "0x438db7329230cCACBb5C02ee5b01b300eb13C633",
  });

  const balanceMumbai = useBalance({
    address: account.address,
    token: "0xed21ad555f7e1d05a91938744059ecaedf9b898c",
  });

  const transferNowEth = () => {
    axios
      .post("https://2ae1-177-8-53-243.ngrok-free.app/boreal/bridge", {
        network: "ethereum",
        sender: account.address,
        amount: drexAmount,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const transferNowMatic = () => {
    axios
      .post("https://2ae1-177-8-53-243.ngrok-free.app/boreal/bridge", {
        network: "polygon",
        sender: account.address,
        amount: drexAmount,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .post(
        "https://b898-2804-431-cfef-b4b0-5c97-1b98-a113-6321.ngrok-free.app/api/v1/namespaces/default/apis/RealTokenizado/query/balanceOf",
        {
          input: {
            account: "0x7A89496642115B79F2A65460e8224c0C2b5f1705",
          },
        }
      )
      .then((response) => setBalanceDREX(response.data.output))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="content-container">
      <div className="card-container">
        <div className="card-header">
          <div className="card-title">Bridge</div>
          <div className="address-container">
            <div className="card-user-address">
              <div>
                {account.isDisconnected && "Connect a wallet"}
                {account.isConnected &&
                  `${account.address.slice(0, 4)}...${account.address.slice(
                    38,
                    42
                  )}`}
              </div>
            </div>
          </div>
        </div>
        <div className="card-subtitle">Transfer from</div>
        <div className="card-bridge-container">
          <div className="bridge-subcomponent">
            <div className="bridge-selector">
              <img alt="" src={BrFlag} />
              <div>DREX</div>
            </div>
            <div className="bridge-right">
              {account.isDisconnected && `Balance: 0`}
              {account.isConnected && balanceDREX}
            </div>
          </div>
        </div>
        <div className="card-bridge-container">
          <div className="bridge-subcomponent">
            <div className="bridge-selector">
              <img alt="" src={BrFlag} />
              <div>WDREXtr</div>
            </div>
            <div
              className="bridge-right"
              style={{ borderRadius: "0 0 12px 0" }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <input
                  className="input"
                  alt=""
                  value={drexAmount}
                  onChange={(e) => setDrexAmount(Number(e.target.value))}
                />
              </div>
              <div className="small-bridge-buttons">25%</div>
              <div className="small-bridge-buttons">50%</div>
              <div className="small-bridge-buttons">MAX</div>
            </div>
          </div>
        </div>
        <div className="only-icon-center">
          <img alt="" src={TransferIcon} />
        </div>
        <div className="card-subtitle" style={{ paddingTop: 0 }}>
          Transfer to
        </div>
        <div className="card-bridge-container">
          <div className="bridge-subcomponent">
            <div className="bridge-selector">
              <div>
                {chain?.name === "Goerli" && <img alt="" src={EthIcon} />}
                {chain?.name === "Polygon Mumbai" && (
                  <img alt="" src={MaticIcon} />
                )}
              </div>
              <div>
                {account.isDisconnected && "Polygon Mumbai"!}
                {account.isConnected && chain?.name}
              </div>
            </div>
            <div className="bridge-right">
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {drexAmount} WDREXtr
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                }}
              >
                {account.isDisconnected && "Balance: 0"}
                {account.isConnected &&
                  chain?.name === "Goerli" &&
                  balanceGoerli?.data?.formatted}
                {account.isConnected &&
                  chain?.name === "Polygon Mumbai" &&
                  balanceMumbai?.data?.formatted}
              </div>
            </div>
          </div>
          <div className="bridge-subcomponent">
            <div
              className="bridge-selector"
              style={{
                width: "100%",
                borderRadius: "0 0 12px 12px",
                color: "gray",
                fontSize: 12,
                fontWeight: 600,
              }}
            ></div>
          </div>
        </div>
        <div className="card-bridge-fees-container">
          <div className="item">
            <div className="item-left">Est. Gas Fees</div>
            <div className="item-right">
              <div>0.00456 ETH</div>
              <div style={{ opacity: 0.5 }}>~7.43 USD</div>
            </div>
          </div>
          <div className="item">
            <div className="item-left">Est. Time</div>
            <div className="item-right">
              <div>15 minutes</div>
            </div>
          </div>
        </div>

        <div style={{ margin: "12px 0" }}>
          {chain?.name === "Goerli" ? (
            <ButtonComponent
              onChange={() => transferNowEth()}
              text="Transfer Now"
            />
          ) : chain?.name === "Polygon Mumbai" ? (
            <ButtonComponent
              onChange={() => transferNowMatic()}
              text="Transfer Now"
            />
          ) : null}
        </div>
        <div style={{ margin: "12px 0" }}>
          <div className="stages-container">
            <div className="stage-item">
              <span>01</span>
              <div>Bridge</div>
            </div>
            <hr className="dotted" />
            <div className="stage-item">
              <span>02</span>
              <div>Claim</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage1;
