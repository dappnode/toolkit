import { expect } from "chai";
import { isEnsDomain, ensureValidDnpName } from "../../src/utils.js";

describe("Util functions", function () {
  describe("isEnsDomain", function () {
    it("should return true for a valid ENS domain", async () => {
      const validEnsDomains = [
        "example.eth",
        "subdomain.example.eth",
        "sub-domain.example.eth",
        "beacon-chain.prysm.dnp.dappnode.eth",
      ];

      for (const domain of validEnsDomains) {
        expect(isEnsDomain(domain)).to.be.true;
      }
    });

    it("should return false for an invalid ENS domain", async () => {
      const invalidEnsDomains = [
        "example.com",
        "subdomain.example.com",
        "sub-domain.example.com",
        "dnp.dappnode.com",
        "example",
        "",
        "example/.dnp.eth",
        "..dappnode.eth",
      ];

      for (const domain of invalidEnsDomains) {
        expect(isEnsDomain(domain)).to.be.false;
      }
    });
  });

  describe("ensureValidDnpName", function () {
    it("should return the valid DNP name", async () => {
      const validDnpNames = [
        "dnp.dappnode.eth",
        "prysm.dnp.dappnode.eth",
        "beacon-chain.prysm.dnp.dappnode.eth",
        "beacon-chain.prysm.public.dappnode.eth",
      ];

      for (const name of validDnpNames) {
        const result = ensureValidDnpName(name);
        expect(result).to.equal(name);
      }
    });

    it("should throw an error for an invalid DNP name", async () => {
      const invalidDnpNames = [
        "..dappnode.eth",
        "subdomain.example.eth",
        "sub-domain.dapnode.eth",
        "dnp.dappnode.com",
        "dappnode",
        "",
        "public.dappnode",
      ];

      for (const name of invalidDnpNames) {
        expect(() => ensureValidDnpName(name)).to.throw(Error);
      }
    });
  });
});
