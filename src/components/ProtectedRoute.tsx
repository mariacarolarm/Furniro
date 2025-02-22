import { useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? <>{children}</> : 
  <h1 className="text-center font-bold text-4xl">
    You need to <SignInButton><span className="border-b-2 cursor-pointer">Sign In</span></SignInButton>
  </h1>;
}

export default ProtectedRoute;