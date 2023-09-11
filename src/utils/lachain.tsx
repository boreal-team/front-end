import { Chain } from "wagmi";

export const lachain = {
  id: 274,
  name: "LaChain",
  network: "LaChain",
  nativeCurrency: {
    decimals: 18,
    name: "LaChain",
    symbol: "LAC",
  },
  rpcUrls: {
    public: { http: ["https://rpc1.mainnet.lachain.network/"] },
    default: { http: ["https://rpc1.mainnet.lachain.network/"] },
  },
  blockExplorers: {
    etherscan: { name: "Lachain", url: "https://explorer.lachain.network/" },
    default: { name: "Lachain", url: "https://explorer.lachain.network/" },
  },
} as const satisfies Chain;
