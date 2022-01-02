import { atom } from 'recoil';

export const playlistState = atom({
  key: 'playlistState',
  default: null
})

export const playlistIdState = atom({
	key: "playlistIdState", // key must be unique
	default: "76UmgrH9ILSMjNutUIRGMA", //todo this part is hard coded
});

