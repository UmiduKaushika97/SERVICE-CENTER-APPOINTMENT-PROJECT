// src/components/UserBookings.tsx
import { useEffect, useState } from "react";
import { getUserBookings, cancelBooking } from "../../../services/bookingServices";
import type { getWithId } from "../../../services/bookingServices";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const UserBookings: React.FC = () => {
  const [bookings, setBookings] = useState<getWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelingId, setCancelingId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");

  // Get current Firebase user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId("");
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch bookings when userId is available
  useEffect(() => {
    if (!userId) return;

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const data = await getUserBookings(userId);
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  // Cancel booking handler
  const handleCancel = async (bookingId: string) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    try {
      setCancelingId(bookingId);
      await cancelBooking(bookingId);
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    } catch (error) {
      console.error("Error canceling booking:", error);
    } finally {
      setCancelingId(null);
    }
  };

  if (!userId) return <p className="text-center mt-10">Please login to see your bookings.</p>;
  if (loading) return <p className="text-center mt-10">Loading bookings...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">My Bookings</h2>

      {bookings.length > 0 ? (
        <>
          {/* Table for larger screens */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Slot</th>
                  <th className="border p-2">Booked At</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="text-center">
                    <td className="border p-2">{booking.fullName}</td>
                    <td className="border p-2">{booking.email}</td>
                    <td className="border p-2">{booking.bookingDate}</td>
                    <td className="border p-2">
                      {booking.createdAt?.toDate().toLocaleString()}
                    </td>
                    <td className="border p-2">
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:bg-gray-400"
                        disabled={cancelingId === booking.id}
                      >
                        {cancelingId === booking.id ? "Cancelling..." : "Cancel"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile */}
          <div className="sm:hidden space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="border rounded-lg shadow p-4 bg-white">
                <p className="text-sm">
                  <span className="font-semibold">Name:</span> {booking.fullName}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Email:</span> {booking.email}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Slot:</span> {booking.bookingDate}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Booked At:</span>{" "}
                  {booking.createdAt?.toDate().toLocaleString()}
                </p>
                <button
                  onClick={() => handleCancel(booking.id)}
                  className="mt-3 w-full bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 disabled:bg-gray-400"
                  disabled={cancelingId === booking.id}
                >
                  {cancelingId === booking.id ? "Cancelling..." : "Cancel"}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">No bookings found</p>
      )}
    </div>
  );
};

export default UserBookings;
