import { Magic } from "magic-sdk";

export const magic = new Magic("pk_live_B81F9B12CD77158E", {
    network: {
      rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
      chainId: 11155111,
    },
  })