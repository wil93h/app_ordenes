function BoxFullWidth({className="",...children}) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`} {...children}/>
  )
}
export default BoxFullWidth