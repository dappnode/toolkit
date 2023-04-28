## apm

Uses repository smart contract (for individual dappndoe packages).

- `getProvider`
- `fetchVersion`
- `fetchApmVersionsState`
- `repoExists`

## getRegistry

Gets the packages by scanning the blockchain for the public registry (public.dappnode.eth).

- `getRegistry`

## directory

Fetches all package names in the custom dappnode directory.

- [NOTE]: Already sorted by: feat#0, feat#1, dnp#0, dnp#1, dnp#2

- `getDirectory`

## dappGet

Aggregates all relevant packages and their info given a specific request. The resulting "repo" (dnps) is run through a brute force resolver. It returns success when finds the first compatible combination of versions. Otherwise it will return an error formated object

- `dappGet`

#### dappGetFetcher

Fetches and resolves a dappnode package dependencies

## release

Extends APM. Used to get releases from dpn requests

- `resolveReleaseName`
- `getRelease`
- `getReleases`
- `getReleasesResolved`
- `getManifest`
