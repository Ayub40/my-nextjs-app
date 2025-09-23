"use client";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { useRouter } from "next/navigation";


const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  }

  return (
    <div className="text-center flex items-center justify-center flex-col gap-4 min-h-screen">
      <h1 className="text-4xl">Welcome To Next.Js Home Page</h1>
      <p className="text-6xl">React Server Component (RSC)</p>
      {/* <Link href="/dashboard">
        <button className="bg-amber-500 p-1.5 rounded-md">Dashboard</button>
      </Link> */}

      <button onClick={handleNavigation} className="bg-amber-500 p-1.5 rounded-md">Dashboard</button>
      <Button>Click Me</Button>

    </div>
  );
};

export default HomePage;



