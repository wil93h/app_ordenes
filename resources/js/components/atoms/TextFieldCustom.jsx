import { Colors } from '../../models';
import { styled, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const ternaryColor = Colors['COLOR-MOON']
const secondColor = Colors['COLOR-GRAY'];
const primaryColor = Colors['COLOR-BIRO-BLUE'];

const TextFieldCss = styled(TextField)(({ theme }) => ({
    // margin: theme.spacing(1),
    'label + &': {
        // marginTop: theme.spacing(3),
      },
    // minWidth: 80,
    // maxWidth: 120,
    color: primaryColor,
    '& label': {
        color: ternaryColor,
         fontSize: 18
    },
    '& label.Mui-focused': {
        color: ternaryColor,

    },
    '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: secondColor,
        },
        '&:hover fieldset': {
        borderColor: secondColor,
        },
        '&.Mui-focused fieldset': {
        borderColor: secondColor,
        },
        
    },
    '& .MuiInputBase-root': {
        color:secondColor ,
        backgroundColor: primaryColor,
        // fontSize:24,
        // height: 44
    },
    "& .MuiFormHelperText-root" :{
        color: '#e45446 !important',
        fontSize:'21px'
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{
        borderColor: secondColor,
    },
    "& .Mui-disabled":{
        color: secondColor,
    }
}));


const TextFieldCustom= ({ id,label, name, pHolder, type,min,max })=> {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
            <TextFieldCss 
                id={id}
                variant="outlined"
                type = {type}
                label={label}
                placeholder = {pHolder}
                sx={{ maxWidth: max, minWidth:min}}
                error={!!errors[name]}
                helperText={errors[name]?.message ?? ''}
                fullWidth
                margin="dense"
                {...register(name)}
                /> 
    )
}

export default TextFieldCustom;