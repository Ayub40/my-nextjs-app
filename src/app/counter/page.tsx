import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
            <div className='bg-white shadow-md rounded-2xl p-6 text-center'>
                <h1 className='text-2xl text-gray-400 font-bold mb-4'>
                    Simple Counter
                </h1>
                <p className='text-4xl font-semibold text-indigo-600 mb-6'>{count}</p>
                <div className='flex gap-3'>
                    <button onClick={() => setCount(count - 1)} className='px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition'>
                        -Decrement
                    </button>
                    <button onClick={() => setCount(0)} className='px-4 py-2  bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition'>
                        Reset
                    </button>
                    <button onClick={() => setCount(count + 1)} className='px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-500 transition'>
                        +Increment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;