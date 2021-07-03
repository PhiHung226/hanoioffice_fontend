import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

const UtilitiesList = ({ dataArr }) => {
  return (
    <>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Các tiện của chi nhánh</FormLabel>
          <FormGroup aria-label="position" row className="px-5">
            {
              dataArr.map((item, index) => {
                return (
                  <FormControlLabel key={ index }
                    value={ item.id }
                    control={ <Checkbox color="primary" /> }
                    label={ item.text }
                    labelPlacement="end"
                  />
                );
              })
            }
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};
UtilitiesList.propTypes = {
  dataArr: PropTypes.array,
};
export default UtilitiesList;