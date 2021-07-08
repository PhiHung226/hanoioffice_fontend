import { atom } from 'recoil';

const today = new Date();
export const branchFilterParamsState = atom({
  key: 'branchFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    debitSearch: 99,
    from_date: today,
    to_date: today,
  }
});

export const branchPageLimitState = atom({
  key: 'branchPageLimitState',
  default: 15
});

export const branchPageState = atom({
  key: 'branchPageState',
  default: 1
});