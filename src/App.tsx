import React, { useState, useEffect } from 'react';
import { TimeDisplay } from './components/TimeDisplay';
import { DateDisplay } from './components/DateDisplay';

function App() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/20">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-700 text-center mb-8">
            Current Time
          </h1>
          <TimeDisplay time={currentTime} />
          <DateDisplay date={currentTime} />
        </div>
      </div>
    </div>
  );
}

export default App;