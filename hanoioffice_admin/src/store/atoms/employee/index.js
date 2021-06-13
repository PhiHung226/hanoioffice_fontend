import { atom } from 'recoil';

export const employeeFilterParamsState = atom({
  key: 'employeeFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    emailSearch: '',
    telSearch: '',
    branchSearch: [],
    sex: 99,
    department: [],
    position: []
  },
});
