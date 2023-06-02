import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;