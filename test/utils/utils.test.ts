import { expect } from "chai";
import { ensureValidDnpName } from "../../src/utils.js";

describe("Util functions", function () {
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
