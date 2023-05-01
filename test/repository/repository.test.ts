import { ethers } from "ethers";
import { expect } from "chai";
import {
  DappnodeRepository,
  IpfsClientTarget,
} from "../../src/repository/index.js";

describe.only("Dappnode Repository", function () {
  this.timeout(100000);
  let contract: DappnodeRepository;
  const prysmVersion = "3.0.8";

  before(async () => {
    const ethProvider = new ethers.providers.InfuraProvider(
      "mainnet",
      "e6c920580178424bbdf6dde266bfb5bd"
    );
    const dnpName = "prysm.dnp.dappnode.eth";
    const ipfsUrl = "https://api.ipfs.dappnode.io";
    const ipfsClientTarget = IpfsClientTarget.api;

    contract = new DappnodeRepository(
      ethProvider,
      dnpName,
      ipfsUrl,
      ipfsClientTarget
    );
  });

  it(`Should get and validate packages versions from Prysm:${prysmVersion}`, async () => {
    const expectedVersionAndIpfsHash = {
      version: "3.0.8",
      contentUri: "/ipfs/QmZrZeQwMBBfSb6FQUcKdnB9epGmUzqarmkw2RbwTVQgbZ",
    };
    const result = await contract.getVersionAndIpfsHash(prysmVersion);
    expect(result).to.deep.equal(expectedVersionAndIpfsHash);
  });

  it(`Should get and validate package release from Prysm:${prysmVersion}`, async () => {
    const expectedImageFile = {
      hash: "QmWcJrobqhHF7GWpqEbxdv2cWCCXbACmq85Hh7aJ1eu8rn",
      size: 64446140,
      source: "ipfs",
    };
    const expectedAvatarFile = {
      hash: "QmeZBTEAf3bXJreBECaMhHa53bhCPqvSwVng8q1UnPoL4L",
      size: 4292,
      source: "ipfs",
    };
    const expectedManifest = {
      name: "prysm.dnp.dappnode.eth",
      version: "3.0.8",
      upstreamVersion: "v4.0.2",
      upstreamRepo: "prysmaticlabs/prysm",
      upstreamArg: "UPSTREAM_VERSION",
      shortDescription: "Prysm mainnet ETH2.0 Beacon chain + validator",
      description:
        "Validate with Prysm: a Go implementation of the Ethereum 2.0 Serenity protocol and open source project created by Prysmatic Labs.\n" +
        "\n" +
        "It includes a Grafana dashboard for the [DMS](http://my.dappnode/#/installer/dms.dnp.dappnode.eth) thanks to the amazing work of [metanull-operator](https://github.com/metanull-operator/eth2-grafana)",
      type: "service",
      architectures: ["linux/amd64"],
      mainService: "validator",
      author:
        "DAppNode Association <admin@dappnode.io> (https://github.com/dappnode)",
      contributors: [
        "dappLion <dapplion@dappnode.io> (https://github.com/dapplion)",
      ],
      chain: {
        driver: "ethereum-beacon-chain",
        serviceName: "beacon-chain",
        portNumber: 3500,
      },
      license: "GPL-3.0",
      repository: {
        type: "git",
        url: "git+https://github.com/dappnode/DAppNodePackage-prysm.git",
      },
      bugs: { url: "https://github.com/dappnode/DAppNodePackage-prysm/issues" },
      requirements: { minimumDappnodeVersion: "0.2.60" },
      backup: [
        {
          name: "eth2validators",
          path: "/root/.eth2validators",
          service: "validator",
        },
      ],
      categories: ["Blockchain", "ETH2.0"],
      style: {
        featuredBackground: "linear-gradient(67deg, #16000c, #123939)",
        featuredColor: "white",
      },
      links: {
        ui: "http://brain.web3signer.dappnode",
        homepage: "https://prysmaticlabs.com/",
        readme: "https://github.com/dappnode/DAppNodePackage-prysm",
        docs: "https://docs.prylabs.network/docs/getting-started",
      },
      warnings: {
        onMajorUpdate:
          "This is a major update that enables multiclient validation on Mainnet.⚠️ BEFORE YOU START, MAKE SURE YOU HAVE A BACKUP OF THE VALIDATOR KEYS⚠️ . A new package, the web3signer, will be automatically installed and keys will be moved inside of this package. The web3signer will hold the keys and allow you to change validator clients safely. From now on, the UI to handle the keystores will be available at the web3signer package. You will be prompted to choose a validator client in the following steps; make sure you select one that is installed and synced (leave it as Prysm if you are not sure, you can change it later). Pay attention to the update and make sure the keystores are successfully relocated by checking the UI of the web3signer after the update.",
        onRemove:
          "Make sure your StakersUI does not have this client selected! Double check in the Stakers Tab in the left NavBar",
      },
      globalEnvs: [
        {
          envs: ["EXECUTION_CLIENT_MAINNET", "MEVBOOST_MAINNET"],
          services: ["beacon-chain"],
        },
        { envs: ["MEVBOOST_MAINNET"], services: ["validator"] },
      ],
    };
    const expectedCompose = {
      version: "3.4",
      services: {
        "beacon-chain": {
          environment: {
            CHECKPOINT_SYNC_URL: "",
            CORSDOMAIN: "http://prysm.dappnode",
            EXTRA_OPTS: "",
            FEE_RECIPIENT_ADDRESS: "",
            P2P_TCP_PORT: 13103,
            P2P_UDP_PORT: 12103,
          },
          image: "beacon-chain.prysm.dnp.dappnode.eth:3.0.8",
          ports: ["13103:13103/tcp", "12103:12103/udp"],
          restart: "unless-stopped",
          volumes: ["beacon-chain-data:/data"],
        },
        validator: {
          environment: {
            BEACON_RPC_GATEWAY_PROVIDER: "beacon-chain.prysm.dappnode:3500",
            BEACON_RPC_PROVIDER: "beacon-chain.prysm.dappnode:4000",
            EXTRA_OPTS: "",
            FEE_RECIPIENT_ADDRESS: "",
            GRAFFITI: "validating_from_DAppNode",
            LOG_TYPE: "INFO",
          },
          image: "validator.prysm.dnp.dappnode.eth:3.0.8",
          restart: "unless-stopped",
          volumes: ["validator-data:/root/"],
        },
      },
      volumes: { "beacon-chain-data": {}, "validator-data": {} },
    };

    const pkgRelease = await contract.getPkgRelease(prysmVersion);
    expect(pkgRelease.manifest).to.deep.equal(expectedManifest);
    expect(pkgRelease.compose).to.deep.equal(expectedCompose);
    expect(pkgRelease.imageFile).to.deep.equal(expectedImageFile);
    expect(pkgRelease.avatarFile).to.deep.equal(expectedAvatarFile);
  });
});
