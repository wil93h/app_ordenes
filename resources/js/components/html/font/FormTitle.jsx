export default function FormTitle({label,cName}) {
  return (
    <span className={`text-moon lg:!text-[55px] md:!text-[40px] sm:!text-[30px] xs:!text-[20px] ${cName}`}>{label}</span>
  )
}