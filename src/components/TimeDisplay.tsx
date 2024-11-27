import React from 'react';
import { Clock } from 'lucide-react';
import { getFormattedTime } from '../utils/timeUtils';

interface TimeDisplayProps {
  time: Date;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ time }) => {
  return (
    <div className="flex items-center space-x-3 text-4xl font-bold text-gray-800">
      <Clock className="w-8 h-8" />
      <span>{getFormattedTime(time)}</span>
    </div>
  );
};