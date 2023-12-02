import { Card, CardActionArea, CardContent, CardHeader, CardMedia, styled, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NotAccessible } from "@mui/icons-material";

const StyledCard = styled(Card)`
  ${({theme}) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(159, 159, 163, 0.55) 0px 5px 15px;;
  }
  `}
`;

function CardCustom({ img = NotAccessible, title = 'ERROR', handle }) {
  return (
    <div className="flex items-center justify-center content-center go-corner">
      <StyledCard onClick={handle} className="cursor-pointer w-full lg:mx-8 md:mx-8 my-2 max-h-[350px] min-h-[350px] max-w-[350px] min-w-[200px]  md:grid-cols-2 xs:grid xs:grid-cols-5 xs:min-h-[60px] xs:max-w-[300px] xs:min-w-[300px]">
        <CardHeader
          className="!py-6 xs:order-last"
          action={
            <ArrowForwardIosIcon className="!text-[35px] xs:!text-[14px]"     
            />
          }
        />
        <div className="flex justify-center !py-6">
          <img
            className="!h-[100px] xs:!h-[24px]"
            src={img}
            alt="Logo Menu"
          />
        </div>
        <CardContent className="!py-4 !px-0 lg:!mx-8 md:!mx-12 xs:col-span-3 flex justify-center items-center xs:justify-start">
          <Typography variant="h2" className="lg:!text-[24px] md:!text-[18px] sm:!text-[18px] !font-light text-biro-blue flex justify-center text-center xs:!text-[12px]">
            {title}
          </Typography>
        </CardContent>
      </StyledCard>
    </div>

  )
}
export default CardCustom