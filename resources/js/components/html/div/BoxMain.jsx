function BoxMain({className="",...children}) {
  return (
    <div className={`flex h-screen items-center justify-center bg-dark ${className}`} {...children}/>
  )
}
export default BoxMain