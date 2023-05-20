const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

function compileContract() {
    let recordPath = path.resolve(__dirname, 'contracts', 'record.sol');
    let source = fs.readFileSync('./contracts/record.sol' , 'utf8')
    let complierInput = {
        language: 'Solidity',
        sources:
        {
            'record.sol': 
            {
                content: source
            }
        },
        settings:
        {
            optimizer:
            {
                enabled: true
            },
            outputSelection:
            {
                '*':{
                    '*':['*']
                }
            }
        }
    };
    console.log('compiling contract');
    let compiledContract = JSON.parse(solc.compile(JSON.stringify(complierInput)));
    console.log('Contract Compiled');
    for (let record in compiledContract.contracts['record.sol']) {
        console.log(record , compiledContract.contracts['record.sol'][record].abi);      
        let abi = compiledContract.contracts['record.sol'][record].abi;
        fs.writeFileSync(`./contracts/bin/${record}_abi.json` , JSON.stringify(abi));
        return compiledContract.contracts['record.sol'][record];
    }
}

