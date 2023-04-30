import { ethers } from "ethers";
import { expect } from "chai";
import {
  APMRegistry__factory,
  APMRegistry,
} from "../../src/typechain/index.js";

describe("APMRegistry", () => {
  const contractAddress = "0xc0109600808F57f04E1C4d469d3b6978d72DC67B";
  const repoName = "prysm.dnp.dappnode.eth";
  const prysmPraterIpfsHash =
    "/ipfs/QmeM66HrvdMtt3jA9gD4tS63vyWwQG7tbPemTDNior9Lub";
  const publicAddress = "0x0289e9f79baff002d9a7436787d8c71b0ff6a6ab";
  const privateKey =
    "4a12ce0b9e2c7bb80fd925ed306f964e837c9c88589e90717851b4da816a7fa8";
  let contract: APMRegistry;

  before(async () => {
    // Connect to the truffle development network
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:9545"
    );
    const signer = await provider.getSigner();

    // Replace `contractAddress` with the actual address of your deployed contract

    contract = APMRegistry__factory.connect(contractAddress, signer);
  });

  it("should create new repo", async () => {
    const name = "prysm.dnp.dappnode.eth";
    const repo = await contract.newRepoWithVersion(
      repoName,
      publicAddress,
      ["0", "1", "0"],
      "0",
      prysmPraterIpfsHash
    );
  });
});
