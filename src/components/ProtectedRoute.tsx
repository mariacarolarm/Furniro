import { useUser } from "@clerk/clerk-react";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? <>{children}</> : null;
}

export default ProtectedRoute;