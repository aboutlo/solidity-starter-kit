# Solidity Starter Kit

## Features

- Prettier for Solidity and Javascript files
- Watch files
- Linting Solidity and Javascript files
- Commit hooks for Linting and Prettify

## TODO:

- Coverage
- Deploy
- Add Manticore
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

Start to modify the smart contracts (`./contracts`) and the tests (`.test`)

    yarn start
