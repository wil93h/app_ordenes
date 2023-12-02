import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Controller, useFormContext } from 'react-hook-form';
import { Colors } from '../../models';

const AutoCompleteRemastered = styled(Autocomplete)(({ theme }) => ({
  color: Colors['COLOR-BLUE'],
  // '&.MuiPaper-root, .MuiPaper-elevation, .MuiPaper-rounded, .MuiPaper-elevation1, .MuiAutocomplete-paper': {
  //   color: `${Colors['COLOR-MOON']} !important`,
  // },
  '& label': {
    color: Colors['COLOR-MOON'],
    fontSize: 18
  },
  '& label.Mui-focused': {
    color: Colors['COLOR-MOON'],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: Colors['COLOR-GRAY'],
  },
  '& .MuiOutlinedInput-root': {
    '& filled': {
      backgroundColor: Colors['COLOR-GRAY'],
    },
    '& fieldset': {
      borderColor: Colors['COLOR-GRAY'],
    },
    '&:hover fieldset': {
      borderColor: Colors['COLOR-GRAY'],
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors['COLOR-GRAY'],
    },

  },
  '& .MuiInputBase-root': {
    color: Colors['COLOR-MOON'],
    backgroundColor: 'transparent',
    // fontSize:24,
    // height: 44
  },
  "& .MuiFormHelperText-root": {
    color: Colors['COLOR-GRAY'],
    fontSize: '21px'
  },
  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: Colors['COLOR-GRAY'],
  },
  "& .Mui-disabled": {
    color: Colors['COLOR-GRAY'],
  },
  '& .MuiSvgIcon-root': {
    color: Colors['COLOR-MOON']
  },
  expandedPanel: {
    backgroundColor: Colors['COLOR-BLUE']
  }

}));

const AutoCompleteCustom= ({ label, name , map, pHolder, min,max }) => {
  const {
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const selectMap  = watch(map) || [];

  const themeSelect = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          listbox: {
            background: Colors['COLOR-GRAY']
          }
        }
      },
    }
  });
  const test= [
    { id: 1, name: 'opción 1' },
  ]
  return (
    <Controller
      name={name}
      control=  {control}
      render={({field:{ onChange, value }})=>(
        <ThemeProvider theme={themeSelect}>
        <AutoCompleteRemastered
          defaultValue={test}
          value={value || null}
          options={ selectMap } 
          getOptionLabel = {(item) => item.name}
          isOptionEqualToValue={(option, value) =>option.id === value.id}
          sx={{ maxWidth: max, minWidth:min}}
          renderInput= {(params)=>(
            <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={pHolder}
            error={!!errors[name]}
            helperText={errors[name]?.message ?? ''}
            />
            )}
            onChange={(_, data)=>{
              onChange(data);
              return data;
            }
          }
          />
          </ThemeProvider>
      )
    }
    />
  )
}


export default AutoCompleteCustom