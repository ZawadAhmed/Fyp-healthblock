const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/record.json');


var mnemonic = 'around birth talk degree machine chalk mixed oil gesture cake almost penalty';

var privateKeys = [
    "99eb0b987c4d66fd8c9501883b5d809f29144719f05c2038412f4fc87491da49",
    "c9cff3fb42b043302e852d23cc588f91dd4713aadc74b963371d107ffab858c5",
  ];


//Link to sepolia network by using Infura and providing seed phrase of metamask wallet
let provider = new HDWalletProvider(
    'around birth talk degree machine chalk mixed oil gesture cake almost penalty',
    'https://sepolia.infura.io/v3/2f2093ab90c74ae5a9c4707cc6ce1852'    
    
    //process.env.NEXT_PUBLIC_MNEMONIC,
    //process.env.NEXT_PUBLIC_INFURA_API_KEY
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    //Deploy contract to sepolia network
    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.abi))
        .deploy({ data: compiledRecord.evm.bytecode.object })
        .send({ gas: '10000000', from: accounts[0] });

    //Display the address of the contract 
    console.log('Contract deployed to', result.options.address);

  

    //Always go to record.js after updating solidity code

    // At termination, `provider.engine.stop()' should be called to finish the process elegantly.
    provider.engine.stop();
};

    //OLD CODE 

/*const HDWalletProvider = require('');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

//Link to rinkeby network by using Infura and providing seed phrase of metamask wallet
const provider = new HDWalletProvider(
    'ivory honey fix online income decorate also top wish civil decorate illegal',
    'https://rinkeby.infura.io/v3/cae3e4c525ba4a75b6ae9ffe89ca6160',
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    //Deploy contract to rinkeby network
    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
        .deploy({ data: compiledRecord.bytecode })
        .send({ gas: '10000000', from: accounts[0] });

    //Display the address of the contract 
    console.log('Contract deployed to', result.options.address);

    //Always go to record.js after updating solidity code
};


deploy();*/