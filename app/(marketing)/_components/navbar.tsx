"use client";

import { useScrollTop } from "@/hook/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";



/**
 * Navbar component renders the navigation bar with authentication controls and links.
 * 
 * The Navbar includes a logo, sign-in buttons, and links for authenticated users. 
 * It also displays a loading spinner when the authentication status is being determined.
 * 
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = () => {
  const scrolled = useScrollTop();  // Tracks if the user has scrolled down from the top.
  const { isAuthenticated, isLoading } = useConvexAuth(); // Authentication state and loading status.

  
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6')}>
      <Logo/>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Notion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="default" size="sm" asChild>
              <Link href="/documents">Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;