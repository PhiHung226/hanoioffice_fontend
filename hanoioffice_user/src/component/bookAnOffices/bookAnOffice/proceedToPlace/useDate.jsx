import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useNumber = [
  {id: 1, name: 'Thứ 2:', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
  {id: 2, name: 'Thứ 3:', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
  {id: 3, name: 'Thứ 4:', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
  {id: 4, name: 'Thứ 5:', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
  {id: 5, name: 'Thứ 6:', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
  {id: 6, name: 'Thứ 7:', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
  {id: 7, name: 'Chủ nhật:  ', ca_1: false, ca_2: false, ca_3: false, ca_4: false, name_1: '8h-10h', name_2: '10h-12h', name_3: '13h-15h',name_4: '15h-17h'},
];
const UseDate=()=> {
  
  const [time, setTime] = React.useState(useNumber);
  const handleChange = (event, ca, id) => {
    console.log(ca + ' ' + id);
    setTime( time.map((item)=> {
      console.log(item.id);
      return { ...item, ca: item.id === id ? !item.ca : item.ca};
    }) );
  };
  return (
    <>
      <div>
        {
          time.map((item, index)=> {
            return (
              <div className="flex justify-between items-center" key={ index }>
                <p className="ml-24">{ item.name }</p>
                <div className="">
                  <FormGroup row>
                    <FormControlLabel
                      control={ <Checkbox
                        checked={ item.ca_1 }
                        onChange={ e => handleChange(e, 'ca_1', item.id) }
                        name={ item.name_1 }
                        color="primary"
                      /> }
                      label={ item.name_1 }
                      
                    />
                    <FormControlLabel
                      control={ <Checkbox
                        checked={ item.ca_2 }
                        onChange={ e => handleChange(e, 'ca_2', item.id) }
                        name={ item.name_2 }
                        color="primary"
                      /> }
                      label={ item.name_2 }
                      className='pl-6'
                    />
                    <FormControlLabel
                      control={ <Checkbox
                        checked={ item.ca_3 }
                        onChange={ e => handleChange(e, 'ca_3', item.id) }
                        name={ item.name_3 }
                        color="primary"
                      /> }
                      label={ item.name_3 }
                      className='pl-6'
                    />
                    <FormControlLabel
                      control={ <Checkbox
                        checked={ item.ca_4 }
                        onChange={ e => handleChange(e, 'ca_4', item.id) }
                        name={ item.name_4 }
                        color="primary"
                      /> }
                      label={ item.name_4 }
                      className='pl-6'
                    />
                  </FormGroup>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};
export default UseDate;