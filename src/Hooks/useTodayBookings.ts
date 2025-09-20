import { useQuery } from "@tanstack/react-query";
import { getTodayBookings } from "../services/bookingServices";

export const useTodayBookings = () => {
  return useQuery({
    queryKey: ["todayBookings"],
    queryFn: getTodayBookings,
    staleTime: 1000 * 60,
  });
};