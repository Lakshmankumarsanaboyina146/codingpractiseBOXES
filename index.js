const Box = props => {
  //  Write your code here.
  const {boxsize, boxbackground} = props
  return (
    <div className={boxbackground}>
      <p>{boxsize}</p>
    </div>
  )
}

const element = (
  <div>
    <h1 className='boxes-heading'>Boxes</h1>
    <div className='box-container'>
      <Box boxsize='Small' boxbackground='smallbox-background' />
      <Box boxsize='Medium' boxbackground='mediumbox-background' />
      <Box boxsize='Large' boxbackground='largebox-background' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
