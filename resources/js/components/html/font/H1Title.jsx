import { Colors } from '../../../models';

function H1Title({label,cName}) {

  return (
    <h1 className={`pb-9 pt-9 text-color-moon md:!text-[40px] sm:!text-[35px] xs:!text-[30px] ${cName}`}>{label}</h1>
  )
}
export default H1Title