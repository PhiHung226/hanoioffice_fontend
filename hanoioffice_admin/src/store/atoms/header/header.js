import { atom } from 'recoil';

export const showLeftSideState = atom({
  key: 'showLeftSideState',
  default: true
});

export const setWidthDefault = atom({
  key: 'setWidthDefault',
  default: 1280
});

export const onCloseOpenDrawer = atom({
  key: 'onCloseOpenDrawer',
  default: false
});
