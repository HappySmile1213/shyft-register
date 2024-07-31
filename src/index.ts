import { Network, ShyftSdk } from "@shyft-to/js";
import { TxnAction } from "@shyft-to/js";

const RAYDIUM_AMM_ADDRESS = "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8";

const registerCallback = async () => {
  const shyft = new ShyftSdk({
    apiKey: "UUV5_EiCZs1ri0mG",
    network: Network.Mainnet,
  });
  await shyft.callback.register({
    network: Network.Mainnet,
    addresses: [RAYDIUM_AMM_ADDRESS],
    callbackUrl: `https://poolmonitor.online/api/pool`,
    events: [
      TxnAction.CREATE_POOL,
      // TxnAction.SWAP,
      // TxnAction.ADD_LIQUIDITY,
      // TxnAction.REMOVE_LIQUIDITY,
    ],
  });
  console.log("success");
};

registerCallback();
