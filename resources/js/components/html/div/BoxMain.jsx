function BoxMain({className="",...children}) {
  return (
    <div className={`flex flex-col h-screen items-center bg-dark ${className}`} {...children}/>
  )
}
export default BoxMain