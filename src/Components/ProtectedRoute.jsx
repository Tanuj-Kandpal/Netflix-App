import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const isSignedIn = true;
  const isLoading = true;
  //TODO: Implementation with Firebase still pending
  if (!isSignedIn && !isLoading) {
    return <Navigate to="/Login" replace />;
  }
  return children;
}
export default ProtectedRoute;
