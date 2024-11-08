import './Loader.css'

const Loader = () => {
  return (
    <div className='loader-container'>
      <h1 className='text-white'>Loading...</h1>
      <div className='spinner'>
        <div className='spinner-inner'></div>
      </div>
    </div>
  )
}

export default Loader
