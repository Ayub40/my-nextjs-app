"use client"

import { useEffect } from "react";

const ErrorPage = ({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="mt-5 space-y-2">
            <p className="text-center text-red-500 text-xl">Something went wrong</p>
            <p className="text-center text-red-500 text-xl">{error?.message}</p>
            <div className="text-center">
                <button onClick={() => reset()} className="bg-black text-white py-2 px-5 rounded-lg shadow-md hover:bg-green-700 transition-all">
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;