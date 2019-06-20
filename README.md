# Solidity Starter Kit

## Features

- Prettier for Solidity and Javascript files
- Linting Solidity and Javascript files
- Watch files
- GIT pre-commit hook for Linting and Prettify

## TODO:

- Coverage
- Add Manticore or Mythril
- Evaluate to add Slither
- Switch to Jest
- Publish the ABI files

## Requirements

- yarn
  - Mac: `brew install yarn`
  - Win: https://yarnpkg.com/latest.msi

## Optional tool

- NVM (Node Version Manager)
  - Mac: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash` [more info|https://github.com/nvm-sh/nvm]
  - Win: https://github.com/coreybutler/nvm-windows
- AVN (Automatic Switch to the Node version of the project)
  - Mac: https://github.com/wbyoung/avn
  - Win: https://github.com/wbyoung/avn/issues/46#issuecomment-357673650 (not tested)

## Install

    yarn install

## Develop

Start a ganache-cli instance

    yarn ganache:start

Modify the smart contracts (`./contracts`) or the tests (`./test`)

    yarn watch

Export ABI

    yarn build

Copy ABI from `build/Example.json` to the client

## Deploy in Ropsten

Set the below env variables (or add them in a `.env` file):

```
export ADMIN=0x0000000000000000001
export INFURA_KEY=abc1**************************
export MNEMONIC="mysecret words **********************"
```

MetaMask wallet:

- switch to Ropstein network
- click on "accounts" in the top right corner of Metamask
- select "Import account"
- enter private key

Collect some ETH from a faucet:

- <https://faucet.metamask.io/>

Deploy the smart contracts:

    yarn deploy:ropsten

## Interact with a deployed smart contract

Run the truffle console:

    yarn truffle:ropsten:console

## Retrieve more address test from the Mnemonic

- Go to https://iancoleman.io/bip39/
- Copy and paste our Mnemonic in the `BIP39 Mnemonic` field
- Select Ethereum from the `coin` list
- Double check that the derivation path is set to `BIP44`
- Check in `Derived Addresses` there is one of our address
- Copy a private key and import in Metamask or where you need

**notice**: copy and past mnemonic online is bad practice. Do only for test mnemonics
