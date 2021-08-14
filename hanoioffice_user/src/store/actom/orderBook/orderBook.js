import {atom} from 'recoil';

// const today = new Date();
export const orderBookFilterParamsState = atom({
  key: 'orderBookFilterParamsState',
  default: {
    branch: 0,
    typeRoom: 0,
  }
});
export const orderBookFilterParams = atom({
  key: 'orderBookFilterParams',
  default: {
    listTime: [],
    listService: [],
    idRoom: '',
    idCustomer: '',
    valueType: []
  }
});
export const orderBookFilterParamsContinuous = atom({
  key: 'orderBookFilterParamsContinuous',
  default: {
    idRoom: '',
    idCustomer: '',
    schdules: []
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

export const totalPayment = atom({
  key: 'totalPayment',
  default: {
    total: '0 VND'
  }
});
