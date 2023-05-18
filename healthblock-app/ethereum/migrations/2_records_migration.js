const Records = artifacts.require("Records");

module.exports = function ( depoloyer) {
    depoloyer.deploy(Records);
}