import { atom } from "recoil";

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "",
});

export const playlistState = atom({
  key: "playlist",
  default: null,
});
