import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, goerli } from "wagmi/chains";
import { lachain } from "./utils/lachain";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, publicClient } = configureChains(
  [polygonMumbai, lachain, goerli],
  [
    alchemyProvider({
      apiKey: "6zzV3Qfs8qBB0MuSEvOhC47L50Ltxmpi",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Boreal Protocol",
  projectId: "e2a32f4eb7bd9c416bb07dcd68f361fa",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          borderRadius: `medium`,
          accentColor: `whitergb(10, 12, 16)`,
          accentColorForeground: `white`,
        })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
