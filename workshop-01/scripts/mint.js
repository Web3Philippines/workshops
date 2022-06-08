// mint.js - mint your token using the Thirdweb SDK
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {} from "dotenv/config";

// load your private key here
const privateKey = process.env.PRIVATE_KEY;
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "mumbai");

// deployed token smart contract address
const contract = sdk.getToken("0x000...");

// mint tokens to specific wallet
