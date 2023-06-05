import record from './build/record.json';
import web3 from '../ethereum/web3';
const compiledRecord = require('./build/record.json');


//Whenever there is a change in Solidity code, use this few commands
//Step 1: cd ethereum
//Step 2: node compile.js
//Step 3: node deploy.js
//Step 4: Paste the contract deployed address above

const contractAddress = '0xdB6C8cc860769cF22499A9be9Ada69440bA464df' ;

const recordcontract = new web3.eth.Contract( compiledRecord.abi, contractAddress );

export default recordcontract;

//0x56c5f9afC0C060bBA857607BF3017C0B9439AF5a


//Deployed Contract Code //Everytime contract code is changed and compiled, need to update this
    //'0xdB6C8cc860769cF22499A9be9Ada69440bA464df'

