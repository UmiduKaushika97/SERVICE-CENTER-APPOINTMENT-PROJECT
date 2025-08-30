import { FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between
     bg-white px-7 py-3 dark:bg-black
     dark:text-white'>
        <h1 className='font-bold'>Dashboard</h1>
    

    {/* <button className='' >

    </button> */}

    <div className='flex items-center gap-3'>
        <FaUser className='rounded-md bg-slate-200 p-0 
        text-2xl dark:bg-slate-600 dark:text-slate-300'/>
        <h2>John Cena</h2>
    </div>
    </div>
    </>
  )
}

export default Header
