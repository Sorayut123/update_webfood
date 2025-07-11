
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import useAuthStore from "../stores/authStore";
// import { isTokenExpired } from "../stores/tokenUtils";

// const ProtectedRoute = ({ children }) => {
//   const { token, isLoggedIn, logout } = useAuthStore();

//   useEffect(() => {
//     if (token && isTokenExpired(token)) {
//       logout();
//     }
//   }, [token, logout]);

//   if (!isLoggedIn || !token || isTokenExpired(token)) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import { isTokenExpired } from "../stores/tokenUtils";

// const ProtectedRoute = ({ children }) => {
//   const { token, isLoggedIn, logout } = useAuthStore();

//   useEffect(() => {
//     // ถ้ามี token และหมดอายุให้ logout ออกจากระบบทันที
//     if (token && isTokenExpired(token)) {
//       logout();
//     }
//   }, [token, logout]);

//   // ถ้าไม่ได้ login หรือไม่มี token หรือ token หมดอายุ
//   // ให้ redirect ไปหน้า login
//   if (!isLoggedIn || !token || isTokenExpired(token)) {
//     return <Navigate to="/login" replace />;
//   }

//   // แสดงเนื้อหาที่ protected
//   return children;
// };

// export default ProtectedRoute;
const ProtectedRoute = ({ children, requiredRole }) => {
  const { token, isLoggedIn, logout, user } = useAuthStore();

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      logout();
    }
  }, [token, logout]);

  if (!isLoggedIn || !token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;