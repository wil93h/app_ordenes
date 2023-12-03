
function Box750Responsive300({className="",...children}) {
  return (
    <div className={`lg:w-[750px] md:w-[600px] sm:w-[500px] xs:w-[300px] w-full ${className}`} {...children}/>
  )
}
export default Box750Responsive300