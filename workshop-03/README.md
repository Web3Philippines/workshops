# Deploy Your Own Membership NFT (Workshop 3)

[![0xWaren](https://img.shields.io/badge/author-Waren%20Gonzaga-purple.svg?style=flat-square)](https://twitter.com/warengonzaga) [![0xZab](https://img.shields.io/badge/author-Beau%20Zabdiel%20Valoria-purple.svg?style=flat-square)](https://twitter.com/beau_zabdiel)

You'll learn how to deploy your own membership NFT on Mumbai (Polygon Testnet) using thirdweb edition drop pre-built contract and Web3 SDK.

## Requirements

1. GitHub Account
2. [Mumbai testnet funds](https://mumbaifaucet.com)
3. Code Editor/[Instant Setup](https://gitpod.io/#https://github.com/web3phl/workshops)
4. Private Key (test wallet is a must)
4. You! 💖

## Setup

Edit the `const/yourDetails.js` and add your smart contract address (Edition Drop / ERC-1155) and the preffered domain name (We'll use `onlybatak.com`). We'll use that domain name as information upon signing. In this workshop we'll use Mumbai Polygon testnet, we recommend to add this testnet via [chainlist.wtf](https://chainlist.wtf).

Create `.env.local` file and place your private key something like this.

```
THIRDWEB_AUTH_PRIVATE_KEY=private_key_here
```

> WARNING: Never commit any file that may contain your private key to your source control.

For testing purposes we'll use this pre-made test membership NFT collection called [Batak Pass](https://thirdweb.com/mumbai/edition-drop/0x40071dC934C59B9BA57e47d6AE5E3Fa6b864bE2E) (ERC-1155).

## Start Server

```
$ yarn dev
```

---
🖥️💖☕ by [Web3 Philippines](https://web3philippines.org)
