import { ethers } from "ethers";
import { expect } from "chai";
import {
  DappnodeRepository,
  IpfsClientTarget,
} from "../../src/repository/index.js";

describe.only("Dappnode Repository", function () {
  this.timeout(100000);
  let contract: DappnodeRepository;

  before(async () => {
    const ethProvider = new ethers.providers.InfuraProvider(
      "mainnet",
      "e6c920580178424bbdf6dde266bfb5bd"
    );
    const dnpName = "prysm.dnp.dappnode.eth";
    const ipfsUrl = "http://api.ipfs.dappnode.io";
    const ipfsClientTarget = IpfsClientTarget.api;

    contract = new DappnodeRepository(
      ethProvider,
      dnpName,
      ipfsUrl,
      ipfsClientTarget
    );
  });

  it("Should get packages versions", async () => {
    const latest = await contract.getVersionAndIpfsHash("latest");
    console.log(latest);
  });
});
