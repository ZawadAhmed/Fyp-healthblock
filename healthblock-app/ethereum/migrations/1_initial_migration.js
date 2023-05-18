const Migrations = artifacts.require("Migrations");

module.exports = function ( depoloyer) {
    depoloyer.deploy(Migrations);
}