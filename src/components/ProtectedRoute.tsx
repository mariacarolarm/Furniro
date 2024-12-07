import { useUser } from "@clerk/clerk-react";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? <>{children}</> : <h1 className="text-center font-bold text-4xl">You need to Sign In</h1>;
}

export default ProtectedRoute;