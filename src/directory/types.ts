import { Manifest } from "@dappnode/types";

/**
 * ==========================
 * SMART CONTRACT - DIRECTORY
 * ==========================
 * [NOTE] Items MUST be ordered by the directory order
 * - featured #0
 * - featured #1
 * - whitelisted #0
 * - whitelisted #1
 * - whitelisted #2
 * - other #0
 * - other #1
 *
 * [NOTE] Search result will never show up in the directory listing,
 * they will appear in a future dropdown under the searchbar
 */
/**
 * Information immediatelly available in the directory smart contract
 */
interface DirectoryItemBasic {
  index: number;
  name: string;
  whitelisted: boolean;
  isFeatured: boolean;
}
export interface DirectoryItemOk extends DirectoryItemBasic {
  status: "ok";
  description: string;
  avatarUrl: string;
  isInstalled: boolean;
  isUpdated: boolean;
  featuredStyle?: {
    featuredBackground?: string;
    featuredColor?: string;
    featuredAvatarFilter?: string;
  };
  categories: string[];
}
export interface DirectoryItemError extends DirectoryItemBasic {
  status: "error";
  message: string;
}
export type DirectoryItem = DirectoryItemOk | DirectoryItemError;
export const directoryDnpStatus = ["Deleted", "Active", "Developing"] as const;
export type DirectoryDnpStatus = (typeof directoryDnpStatus)[number];
export interface DirectoryDnp {
  name: string;
  statusName: DirectoryDnpStatus;
  position: number;
  isFeatured: boolean;
  featuredIndex: number;
  manifest?: Manifest;
  avatar?: string;
}
