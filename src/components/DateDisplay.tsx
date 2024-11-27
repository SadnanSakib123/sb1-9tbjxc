import React from 'react';
import { Calendar } from 'lucide-react';
import { getFormattedDate } from '../utils/timeUtils';

interface DateDisplayProps {
  date: Date;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return (
    <div className="flex items-center space-x-3 text-xl text-gray-600">
      <Calendar className="w-6 h-6" />
      <span>{getFormattedDate(date)}</span>
    </div>
  );
};