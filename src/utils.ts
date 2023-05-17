/**
 * Checks if a domain name is a valid ENS domain.
 * @param ensDomain - The domain name to check.
 * @returns - True if the domain name is valid, false otherwise.
 */
export function isEnsDomain(ensDomain: string): boolean {
  // The regex checks for valid ENS subdomains. Each subdomain part should start with a letter or number,
  // can contain hyphens, and must end with a letter or number. Each subdomain part is separated by a dot.
  const regex = /^[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.eth$/;

  return regex.test(ensDomain);
}

/**
 * Ensures the DNP name ends under valid registries: dnp.dappnode.eth or public.dappnode.eth
 * @param dnpName - The name of the DNP.
 * @returns - The valid DNP name.
 */
export function ensureValidDnpName(dnpName: string): string {
  if (!isEnsDomain(dnpName))
    throw Error(`Invalid ENS domain for dnpName ${dnpName}`);

  if (!dnpName.endsWith(".dappnode.eth"))
    throw Error(`Invalid dnpName ${dnpName}`);
  return dnpName;
}
