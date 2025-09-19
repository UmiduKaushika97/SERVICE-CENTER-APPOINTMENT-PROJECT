// src/routes/ProtectedRoute.tsx
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type { RootState } from "../store/store";
// import type { ReactNode } from "react";

// interface ProtectedRouteProps {
//   children: ReactNode;
//   allowedRoles?: string[];
// }

// const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
//   const { token, user } = useSelector((state: RootState) => state.auth);

//   console.log("Checking access:", user?.userType, allowedRoles);

//   if (!token || !user) {
//     return <Navigate to="/" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(user.userType)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


// src/routes/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { getStoredUser } from "../routes/authHelper";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const user = getStoredUser();

  // Not logged in → send to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Role restriction check
  if (allowedRoles && !allowedRoles.includes(user.userType)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;

