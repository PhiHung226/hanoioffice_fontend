import React, { useState, useRef, useCallback, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // useRecoilState,
  useSetRecoilState
} from 'recoil';

import useOnClickOutSide from '../../../hooks/useOnClickOutSide';
import { employeeFilterParamsState } from '../../../store/atoms/employee';
import BaseIconButton from '../../base/button/BaseIconButton';
import BaseButton from '../../base/button/ButtonBase';
import BaseInput from '../../base/input/BaseInput';
import Popover from '../../common/Popover';
// import Expand from '../common/showLeft/Expand';

const SearchBar = ({ ...props }) => {
  const [ search, setSearch ] = useState({
    strSearch: '',
    codeSearch: '',
    emailSearch: '',
    telSearch: ''
  });
  const { strSearch, codeSearch, emailSearch, telSearch } = search;
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isFocusInput, setIsFocusInput ] = useState(false);
  const filterParams = useSetRecoilState(employeeFilterParamsState);

  const ref = useRef(null);
  useOnClickOutSide(ref, () => {
    setIsOpen(false);
  });
  const onChange = () => {
  };
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      searchStr();
    }
  };
  const searchStr = () => {
    const str = document.getElementById('strSearch').value;
    const code = document.getElementById('codeSearch').value;
    const email = document.getElementById('emailSearch').value;
    const tel = document.getElementById('telSearch').value;
    setSearch({
      strSearch: str,
      codeSearch: code,
      emailSearch: email,
      telSearch: tel
    });
  };

  const handleOpenPopup = useCallback(() => {
    setIsOpen(!isOpen);
  }, [ isOpen ]);

  const onFocusInput = ({ type }) => {
    setIsFocusInput(type === 'focus');
  };


  useEffect(() => {
    filterParams(search => {
      return {
        ...search,
        strSearch: strSearch,
        codeSearch: codeSearch,
        emailSearch: emailSearch,
        telSearch: telSearch
      };
    });
  }, [ search ]);

  return (
    <div ref={ ref } className={ 'flex items-start flex-col lg:flex-row max-w-searchBar w-full' }>
      {/* <Expand /> */ }
      <div
        className={ `flex items-center responsive-searchBar justify-between w-1/3 bg-white p-1 px-4 rounded border border-gray-300 ${isFocusInput ? 'shadow-input-focus' : ''}` }>
        <div className="relative flex w-full items-center">
          <FontAwesomeIcon className="mr-2" icon="search" color={ '#999' } />
          <input
            { ...props }
            id='strSearch'
            type="text"
            className="w-full focus:outline-none focus:shadow-2xl border-0"
            style={ { border: 'none !important' } }
            placeholder="Tìm kiếm..."
            onChange={ onChange }
            onBlur={ onFocusInput }
            onFocus={ onFocusInput }
            onKeyDown={ onEnter }
          />
          <Popover isVisible={ isOpen } className={ 'z-10 w-full top-6' }>
            <div className="p-6 w-full">
              <BaseInput id='codeSearch' placeholder="Theo mã nhân viên" onChange={ onChange } onKeyDown={ onEnter } />
              <BaseInput id='emailSearch' placeholder="Theo địa chỉ email" onChange={ onChange } onKeyDown={ onEnter } />
              <BaseInput id='telSearch' placeholder="Theo số điện thoại" onChange={ onChange } onKeyDown={ onEnter } />
              <div className="flex justify-end" style={ { marginTop: 28 } }>
                <BaseButton title="Tìm kiếm" onClick={ searchStr } className="bg-green-500 btn--green" />
              </div>
            </div>
          </Popover>
        </div>
        <BaseIconButton icon="caret-down" onClick={ handleOpenPopup } />

      </div>
    </div>
  );
};

SearchBar.propTypes = {};

export default React.memo(SearchBar);