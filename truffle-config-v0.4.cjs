// truffle-config.cjs

const tsNode = require("ts-node");
const tsconfigPaths = require("tsconfig-paths");

tsNode.register({ files: true });
tsconfigPaths.register();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.4.18",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
      contracts_build_directory: "./contracts_build/contracts_v0.4",
      contracts_directory: "./contracts/contracts_v0.4",
    },
  },
  contracts_directory: "./contracts/contracts_v0.4",
  contracts_build_directory: "./contracts_build/contracts_v0.4",
  migrations_directory: "./migrations/migrations_v0.4",
};
