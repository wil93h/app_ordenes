import { getColor } from "../../utilities";
import { Button }  from "@mui/material"
import { styled } from '@mui/material/styles';

const ButtonCustom = ({ label, handle, startIcon ,endIcon ,colorChoose=1,disabled, classN="",max,min}) => {

  const {
    bgColor,
    borderColor,
    color,
    h_bgColor,
    h_borderColor,
    h_color
    }= getColor(colorChoose);

  const ButtonCss = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    height: 56,
    fontSize: 20,
    border: '2px solid',
    lineHeight: 1,
    color:color,
    backgroundColor: bgColor,
    borderColor: borderColor,
    borderRadius:'100px !important',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    '&:hover': {
      backgroundColor: h_bgColor,
      borderColor: h_borderColor,
      color:h_color,
      boxShadow: 'none',
    },
    '&:active': {
      // boxShadow: 'none',
      backgroundColor: bgColor,
      borderColor: borderColor,
      boxShadow: `0 0 0 0.2rem ${h_borderColor}`,
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2rem ${h_borderColor}`,
    },
    '&:disabled': {
      backgroundColor: '#697185',
      borderColor: '#313945',
    },
  });

  return (
    <ButtonCss 
    disabled={disabled}
    variant="contained" 
    onClick = {handle}
    startIcon={startIcon}
    endIcon={endIcon}
    type="submit"
    className={classN}
    sx={{ maxWidth: max, minWidth:min}}
    >
      {label}
    </ButtonCss>
  )

}

export default ButtonCustom