import { Colors } from "../models";


function getColor(color) {
  switch (color) {
    // contained
    case 1:
      return ({bgColor:Colors["COLOR-BLUE"],borderColor:Colors["COLOR-BLUE"],color:''
        ,h_bgColor:Colors["COLOR-BLAS-BLUE"],h_borderColor:Colors["COLOR-BLUE"],h_color:''
      });
      break;
    // outlined
    case 2:
      return ({bgColor:Colors["COLOR-BIRO-BLUE"],borderColor:Colors["COLOR-BLAS-BLUE"],color:''
        ,h_bgColor:Colors["COLOR-BLAS-BLUE"],h_borderColor:Colors["COLOR-BLUE"],h_color:''
      });
    // contained
    case 3:
      return ({bgColor:Colors["COLOR-BLAS-BLUE"],borderColor:Colors["COLOR-BLAS-BLUE"],color:''
        ,h_bgColor:Colors["COLOR-BLAS-BLUE"],h_borderColor:Colors["COLOR-BLUE"],h_color:''
      });
    break;
    // outlined
    case 4:
      return ({bgColor:Colors["COLOR-BIRO-BLUE"],borderColor:Colors["COLOR-BLAS-BLUE"],color:''
        ,h_bgColor:Colors["COLOR-BLAS-BLUE"],h_borderColor:Colors["COLOR-BLUE"],h_color:''
      });
    break;
    // back 
    case 5:
      return ({bgColor:Colors["COLOR-BIRO-BLUE"],borderColor:Colors["COLOR-BIRO-BLUE"],color:''
        ,h_bgColor:Colors["COLOR-VORTEX-BLUE"],h_borderColor:Colors["COLOR-GRAY"],h_color:''
      });
    break;
    default:
      return ({bgColor:Colors["COLOR-BLUE"],borderColor:Colors["COLOR-BLUE"],color:''
      ,h_bgColor:Colors["COLOR-BLAS-BLUE"],h_borderColor:Colors["COLOR-BLUE"],h_color:''
    });
    break;
  
  }
}
export default getColor