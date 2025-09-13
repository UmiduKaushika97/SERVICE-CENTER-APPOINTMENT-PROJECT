import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../services/bookingServices";

export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
    staleTime: 1000 * 60, // cache 1 min
  });
};