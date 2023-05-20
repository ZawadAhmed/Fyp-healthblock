const Record_Contract = artifacts.require("record");

module.exports = function(deployer) {
  deployer.deploy(Record_Contract);
};