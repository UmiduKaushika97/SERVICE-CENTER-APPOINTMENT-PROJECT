import { Link } from 'react-router-dom';
import Error from '../assets/error.gif';



const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
  <h1 className="text-6xl font-extrabold text-gray-800 mb-4">401</h1>

  <img src={Error} alt="Error GIF" className="w-110 h-auto mb-6" />

  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Unauthorized</h2>
    <p className="text-gray-500">Acces is denied due to invalid credentials</p>
    <Link to="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Go To Home
    </Link>
  </div>

  <p className="text-gray-700">
    {/* sL Code <span className="text-red-600 font-semibold">Hub</span> */}
  </p>
</div>

  )
}

export default NotFound
