export const enum RegistryType {
  dnp = "dnp.dappnode.eth",
  public = "public.dappnode.eth",
}

interface RegistryEntry {
  id: string;
  name: string;
  repo: string;
}

export interface PublicRegistryEntry extends RegistryEntry {
  RegistryPublic_id: string;
}

export interface DNPRegistryEntry extends RegistryEntry {
  Registry_id: string;
}
