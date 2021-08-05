import { atom } from "recoil";

export const ButtonAtom = atom<string>({
  key: "ButtonAtom",
  default: "서울" as string,
});

export const SyncTimeAtom = atom<string>({
  key: "SyncTimeAtom",
  default: "0.0.00시 동기화",
});
