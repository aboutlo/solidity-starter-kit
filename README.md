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

Modify the smart contracts (`./contracts`) or the tests (`./test`)

    yarn watch

## Deploy

- Start a ganache-cli instance `yarn ganache:start`
- Deploy the smart contracts `yarn deploy`
- Take note of the new smart **contract address**
- Copy ABI from `build/Example.json` to the client
- Copy the **contract address** to initialize the contract factory in the client
