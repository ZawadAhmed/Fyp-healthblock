const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

 const source = fs.readFileSync('./contracts/record.sol' , 'utf8')
 const complierInput = {
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
    let output = JSON.parse(solc.compile(JSON.stringify(complierInput))).contracts['record.sol'];
    
    console.log('Contract Compiled');

    //recreate build folder
    fs.ensureDirSync(buildPath); 

    for (let contract in output) {
        fs.outputJsonSync(
            path.resolve(buildPath, contract.replace(':', '') + '.json'),
            output[contract]
        );
    }


