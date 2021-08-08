import { atom } from 'recoil';

const today = new Date();
export const orderBookFilterParamsState = atom({
  key: 'orderBookFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    debitSearch: 99,
    from_date: today,
    to_date: today,
  }
});

export const orderBookPageLimitState = atom({
  key: 'orderBookPageLimitState',
  default: 15
});

export const orderBookPageState = atom({
  key: 'orderBookPageState',
  default: 1
});