import Link from "next/link";


export default function Navbar() {


    return (
        <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="text-xl font-bold">
                <Link href="/">Next Js</Link>
            </div>

            <div className="flex space-x-5">
                <div className="flex-1 px-6 bg-white border border-red-500 rounded-2xl">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-md px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                <Link href="/login" className="hover:text-gray-300">Login</Link>
            </div>
        </nav>
    );
}