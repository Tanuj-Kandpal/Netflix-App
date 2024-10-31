import { atom } from "recoil";

export const loginAtom = atom({
    key: "loginAtom",
    default: false
})

export const imageIdAtom = atom({
    key: "imageIdAtom",
    default: ""
})