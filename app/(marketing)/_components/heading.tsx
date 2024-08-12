"use client"

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


/**
 * Heading component displays the main heading and description for the Notion landing page.
 * 
 * This component handles user authentication states to show different content:
 * - If the user is authenticated, a button to enter the Notion workspace is displayed.
 * - If the user is not authenticated, a sign-in button is shown.
 * - While loading the authentication state, a spinner is displayed.
 * 
 * @component
 * @returns {JSX.Element} The rendered Heading component.
 */
const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  
  return (
    <div className="max-w-3x1 space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notion free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
export default Heading;