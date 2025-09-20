import { useState } from "react";
import { useBookings } from "../../Hooks/useBookings";
import Cardview from "./Cardview/Cardview";

// import { useState } from "react"
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Header from "../../components/Header/Header";



const AdminDashboard = () => {
  // const [darkMode, setDarkMode] = useState(true);

  // const [isOpen, setIsOpen] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // }

  // const toggleSiderbar = () => {
  //   setIsOpen(!isOpen);
  // }


const ITEMS_PER_PAGE = 5;

//for user count


// export default function BookingsTable() {
  const { data: bookings = [], isLoading } = useBookings();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filter bookings by email or mobile
  const filtered = bookings.filter((b) =>
  (b.email || "").toLowerCase().includes(search.toLowerCase()) ||
  String(b.mobile || "").toLowerCase().includes(search.toLowerCase())
);

  // Pagination logic
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  if (isLoading) return <p className="text-center py-4">Loading...</p>;





  return (
    <>
    

<Cardview/>



<div className="p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by email or phone..."
        className="mb-4 w-full p-2 border rounded-md"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset page on search
        }}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-2 border">Full Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Mobile</th>
              <th className="p-2 border">Vehicle</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50">
                <td className="p-2 border">{b.fullName}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.mobile}</td>
                <td className="p-2 border">
                  {b.vehicleType} - {b.vehicleNumber}
                </td>
                <td className="p-2 border">{b.bookingDate}</td>
                <td className="p-2 border">{b.timeSlot}</td>
                <td className="p-2 border">{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>

    </>
    
  )
}

export default AdminDashboard
