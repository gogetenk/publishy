'use client';

import { DayCard } from './calendar-day';
import { CalendarDay } from './types';

interface CalendarGridProps {
  days: CalendarDay[];
}

export function CalendarGrid({ days }: CalendarGridProps) {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="grid grid-cols-7 gap-2">
      {weekDays.map((day) => (
        <div key={day} className="text-xs text-center font-medium text-muted-foreground">
          {day}
        </div>
      ))}
      {days.map((day, index) => (
        <DayCard key={day.dayNumber} day={day} index={index} />
      ))}
    </div>
  );
}