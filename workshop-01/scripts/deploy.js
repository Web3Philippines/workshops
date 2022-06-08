// deploy.js - deploy your token using the Thirdweb SDK
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {} from "dotenv/config";

// load your private key here
const privateKey = process.env.PRIVATE_KEY;
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "mumbai");

// deploy the token
