
import { useTodayBookings } from "../../Hooks/useTodayBookings";

const TodayBookings = () => {

     const { data: todayBookings, isLoading, isError } = useTodayBookings();

  if (isLoading) return <p>Loading today's bookings...</p>;
  if (isError) return <p>Failed to load bookings.</p>;
  if (!todayBookings || todayBookings.length === 0) return <p>No todayBookings for today.</p>;

  const bookingCount = todayBookings?.length || 0;
  return (
    <>
    {/* Booking count */}
      <h2 className="text-xl font-bold mb-4">
        Today's Bookings: {bookingCount}
      </h2>
    
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Booking Date</th>
            <th className="p-2 border">Booking Date</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {todayBookings.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="p-2 border">{booking.fullName}</td>
              <td className="p-2 border">{booking.email}</td>
              <td className="p-2 border">{booking.mobile || "-"}</td>
              <td className="p-2 border">{booking.bookingDate}</td>
              <td className="p-2 border">{booking.createdAt?.toDate().toLocaleString()}</td>
              <td className="p-2 border">{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
  
}

export default TodayBookings
