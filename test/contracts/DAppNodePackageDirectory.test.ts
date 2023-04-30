import { ethers } from "ethers";
import { expect } from "chai";
import {
  DAppNodePackageDirectory__factory,
  DAppNodePackageDirectory,
} from "../../src/typechain/index.js";

describe("DAppNodePackageDirectory", () => {
  let contract: DAppNodePackageDirectory;

  before(async () => {
    // Connect to the truffle development network
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:9545"
    );
    const signer = await provider.getSigner();

    // Replace `contractAddress` with the actual address of your deployed contract
    const contractAddress = "0xDac42776bd854b7eDB55e03Fca0A2129FCdDeE1b";
    contract = DAppNodePackageDirectory__factory.connect(
      contractAddress,
      signer
    );
  });

  it("should add a package", async () => {
    const name = "myPackage";
    const status = 1;
    const position = 1;
    const idPackage = await contract.addPackage(name, status, position);
    console.log(`idPackage: `, idPackage);
    // Assert that the idPackage returned by the contract is a non-zero value
    expect(idPackage).to.not.equal(0);
  });

  it("should get a package", async () => {
    const idPackage = 1;
    const [name, status, position] = await contract.getPackage(idPackage);
    console.log("getPackage: ", name, status, position);
    console.log(name, status, position);
    // Assert that the name, status, and position returned by the contract are as expected
    expect(name).to.equal("myPackage");
    expect(status).to.equal(1n);
    expect(position).to.equal(1n);
  });

  // Add more test cases as needed
});
