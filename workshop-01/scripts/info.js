// info.js - get info about the token using the Thirdweb SDK
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// instantiate the ThirdwebSDK
const sdk = new ThirdwebSDK("mumbai");

// deployed token smart contract address
const contract = sdk.getToken("0x000...");

// get info about the token
const getTokenInfo = async () => {
    try {
        const balance = await contract.get();
        console.log(balance);
    } catch (err) {
        console.log(err);
    }
};

// LPG!!!
getTokenInfo();
