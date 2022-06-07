// deploy.js setup
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {} from "dotenv/config";

// load your wallet private key here
const privateKey = process.env.PRIVATE_KEY;
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "mumbai");

// deploy token contract