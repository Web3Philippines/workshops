// deploy.js - deploy your token using the Thirdweb SDK
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {} from "dotenv/config";
import fs from "fs";

// load your private key here
const privateKey = process.env.PRIVATE_KEY;
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "mumbai");

// deploy the token
const deployToken = async() => {
    try {
        const token = await sdk.deployer.deployToken({
            name: "Barya ni Pepe",
            description: "Baryan ni Pepe ay isang token na dineploy sa Polygon Mumbai Testnet bilang halimbawa.",
            image: fs.readFileSync('../image/barya.png'),
            symbol: "$BARYA",
            primary_sale_recipient: "0x000...",
        });
        console.log("Your Token Address: "+token+"\nToken deployed - Astig!");
    } catch(err) {
        console.log(err);
    }
}

// LPG!!!
deployToken();
