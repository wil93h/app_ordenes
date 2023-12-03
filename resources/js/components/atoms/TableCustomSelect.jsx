import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Colors } from '../../models';


import upArrow from '../../assets/icons-scrollbar/upArrow.svg';
import upArrowHover from '../../assets/icons-scrollbar/upArrow-hover.svg';
import upArrowActive from '../../assets/icons-scrollbar/upArrow-active.svg';
import downArrow from '../../assets/icons-scrollbar/downArrow.svg';
import downArrowActive from '../../assets/icons-scrollbar/downArrow-active.svg';
import downArrowHover from '../../assets/icons-scrollbar/downArrow-hover.svg';
import { Controller } from 'react-hook-form';

function TableCustomSelect({columns,nameArray,selection}) {

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    borderColor:Colors['COLOR-BIRO-BLUE'],
    backgroundColor:Colors['COLOR-BIRO-BLUE'],
    color:Colors['COLOR-MOON'],
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
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiTable-root': {
      borderCollapse: 'separate',
      borderSpacing: '0px 40px',
    },
    '& .MuiDataGrid-row': {
      backgroundColor:'#3C4557',
      borderSpacing: '0px 40px',
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor:'#697185',
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: `1px solid #697185`
    },
    '& .MuiTablePagination-root': {
      color:'#E0E5F1',
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: `1px solid #697185`,
    },
    '& .MuiDataGrid-iconSeparator': {
      color: '#E0E5F1',
    },

    '& .MuiDataGrid-cell:focus-within': {
      outlineColor: '#E0E5F1',
    },
    '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
      outline: 'none'
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      // borderColor: '#313945',
      borderBottom: `4px solid #313945`,
    },

    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    },
    // '& .MuiPaginationItem-root': {
    //   borderRadius: 0,
    // },

    // Scrollbar custom
    '& .MuiDataGrid-virtualScroller':{
      
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
      backgroundColor: "#E0E5F1",
      width: "10px",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
      backgroundColor:"#E0E5F1",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track:hover': {
      backgroundColor:"#E0E5F1",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
      backgroundColor: "#a0a0a5",
      width: "4px",
      borderRadius: "15px",
      border: "3px solid #E0E5F1",
      minHeight: "50px",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
      backgroundColor:"#697185",
      border:"3px solid #E0E5F1",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button': {
      display: "content",
      backgroundSize: "8px",
      backgroundRepeat: "no-repeat",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button:vertical:decrement': {
      height: "12px",
      width: "16px",
      backgroundPosition: "center 4px",
      backgroundImage: `url("${upArrow}")`,
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button:vertical:decrement:hover': {
      backgroundImage: `url("${upArrowHover}")`,
    },
    
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button:vertical:decrement:active': {
        backgroundImage: `url("${upArrowActive}")`,
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button:vertical:increment': {
      height: "12px",
      width: "16px",
      backgroundPosition: "center 4px",
      backgroundImage: `url("${downArrow}")`,
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button:vertical:increment:hover': {
      backgroundImage: `url("${downArrowHover}")`,
    },
    
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-button:single-button:vertical:increment:active': {
        backgroundImage: `url("${downArrowActive}")`,
    }, 
  }));

  

  return (
    <Controller
      name={nameArray}
      render={({field:{ onChange, value }, fieldState: { invalid, isTouched, isDirty, error },})=>(
    <Box className='w-[100%] h-[500px]'>
      <StyledDataGrid 
        // disableSelectionOnClick
        disableColumnSelector
        // disableRowSelector
        disableColumnMenu
        disableColumnFilter
        getRowClassName = {(params) => `super-app-theme--${params.row.status}`}
        rows={ value } 
        columns={columns}
        onCellClick={(event) => {
          console.log("🚀 ~ file: TableCustomSelect.jsx:149 ~ TableCustomSelect ~ event:", event)

          
        }}
      />
    </Box>
          )
        }
      />
  )
}
export default TableCustomSelect