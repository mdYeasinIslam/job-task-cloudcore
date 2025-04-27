// components/ProtectedPage.tsx
'use client'
import { useAuth } from "@/context/AuthContext";
import { User } from "firebase/auth";
import { redirect } from "next/navigation";
import { JSX, ReactNode } from "react";

type ProtectedPageProps = {
    children: ReactNode | Promise<ReactNode>
};
type ContextType = {
    user: User
    loading:boolean
}

export default function PrivatePage({ children }: ProtectedPageProps): JSX.Element | null {
    const { user, loading } = (useAuth() as any) as ContextType
   
    
    
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  }

if (!user) {
     return  redirect("/signIn"); // Redirect only after checking
    }
  return <>{children}</>;
}
