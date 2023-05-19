const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//build a build folder
const buildPath = path.resolve(__dirname, 'build');
console.log('Deleting build folder...');
fs.removeSync(buildPath);

console.log('Getting contract by path...')
const campaignPath = path.resolve(__dirname, 'contracts', 'Record.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

console.log('Compiling contract...');
const output = solc.compile(source, 1).contracts;


//recreate build folder
fs.ensureDirSync(buildPath); 

//JSON file output
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}