const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/record.json');
const { Mnemonic } = require('ethers');
require("dotenv").config();



//Link to sepolia network by using Infura and providing seed phrase of metamask wallet
let provider = new HDWalletProvider({
   
    mnemonic : {
        phrase: mnemonicPhrase
    },
    providerOrUrl : "https://sepolia.infura.io/v3/2f2093ab90c74ae5a9c4707cc6ce1852"
       
    //process.env.NEXT_PUBLIC_MNEMONIC,
    //process.env.NEXT_PUBLIC_INFURA_API_KEY
});

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    //Deploy contract to sepolia network
    //console.log(compiledRecord.abi);
    console.log(accounts);
    const result = await new web3.eth.Contract(compiledRecord.abi)
        .deploy({ data: compiledRecord.evm.bytecode.object })
        .send({ gas: '10000000', from: accounts[0] });

    //Display the address of the contract 
    console.log('Contract deployed to', result.options.address);

  

    //Always go to record.js after updating solidity code
    // 0xdB6C8cc860769cF22499A9be9Ada69440bA464df
    
    // At termination, `provider.engine.stop()' should be called to finish the process elegantly.
    provider.engine.stop();
};

deploy(); 

