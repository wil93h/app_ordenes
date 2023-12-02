function BoxForm({className="",...children}) {
  return (
    <div className={`flex flex-col items-center h-full ${className}`} {...children}/>
  )
}
export default BoxForm