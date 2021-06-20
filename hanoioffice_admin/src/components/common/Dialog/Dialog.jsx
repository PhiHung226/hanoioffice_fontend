// import React from 'react';

// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

// const options = [
//   'None',
//   'Atria',
//   'Callisto',
//   'Dione',
//   'Ganymede',
//   'Hangouts Call',
//   'Luna',
//   'Oberon',
//   'Phobos',
//   'Pyxis',
//   'Sedna',
//   'Titania',
//   'Triton',
//   'Umbriel',
// ];

// const ConfirmationDialogRaw = (props) => {
//   const { onClose, value: valueProp, open, ...other } = props;
//   const [ value, setValue ] = React.useState(valueProp);
//   const radioGroupRef = React.useRef(null);

//   React.useEffect(() => {
//     if (!open) {
//       setValue(valueProp);
//     }
//   }, [ valueProp, open ]);

//   const handleEntering = () => {
//     if (radioGroupRef.current != null) {
//       radioGroupRef.current.focus();
//     }
//   };

//   const handleCancel = () => {
//     onClose();
//   };

//   const handleOk = () => {
//     onClose(value);
//   };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <Dialog
//       disableBackdropClick
//       disableEscapeKeyDown
//       // maxWidth="md"
//       fullWidth={ true }
//       onEntering={ handleEntering }
//       aria-labelledby="confirmation-dialog-title"
//       open={ open }
//       { ...other }
//       height={ '180px' }
//     // maxHeight={ true }
//     >
//       <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
//       <DialogContent dividers>
//         <RadioGroup
//           ref={ radioGroupRef }
//           aria-label="ringtone"
//           name="ringtone"
//           value={ value }
//           onChange={ handleChange }
//         >
//           { options.map((option) => (
//             <FormControlLabel value={ option } key={ option } control={ <Radio /> } label={ option } />
//           )) }
//         </RadioGroup>
//       </DialogContent>
//       <DialogActions>
//         <Button autoFocus onClick={ handleCancel } color="primary">
//           Cancel
//         </Button>
//         <Button onClick={ handleOk } color="primary">
//           Ok
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// ConfirmationDialogRaw.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   paper: {
//     width: '80%',
//     maxHeight: 485,
//   },
// }));

// const ConfirmationDialog = () => {
//   const classes = useStyles();
//   const [ open, setOpen ] = React.useState(false);
//   const [ value, setValue ] = React.useState('Dione');

//   const handleClickListItem = () => {
//     setOpen(true);
//   };

//   const handleClose = (newValue) => {
//     setOpen(false);

//     if (newValue) {
//       setValue(newValue);
//     }
//   };

//   return (
//     <div className={ classes.root }>
//       <ListItem
//         button
//         divider
//         aria-controls="ringtone-menu"
//         aria-label="phone ringtone"
//         onClick={ handleClickListItem }
//         role="listitem" >
//         <ListItemText primary="Phone ringtone" secondary={ value } />
//       </ListItem>
//       <ConfirmationDialogRaw
//         classes={ {
//           paper: classes.paper,
//         } }
//         id="ringtone-menu"
//         keepMounted
//         open={ open }
//         onClose={ handleClose }
//         value={ value }
//       />
//     </div>
//   );
// };
// export default ConfirmationDialog;
