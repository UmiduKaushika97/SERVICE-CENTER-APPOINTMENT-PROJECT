// hooks/useUsers.ts
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/usersServices";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    staleTime: 1000 * 60, // 1 minute
    // refetchOnWindowFocus: false,
  });
};
