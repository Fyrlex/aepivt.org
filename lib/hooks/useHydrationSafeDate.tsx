import { useState, useEffect } from 'react';

interface SafeDate {
  date: string;
  full: string;
  time: string;
}

export const useHydrationSafeDate = (date: number): SafeDate => {
  const [safeDate, setSafeDate] = useState<SafeDate>({ date: '', full: '', time: ' ' });

  useEffect(() => {
    setSafeDate({
      date: new Date(date).toLocaleDateString(),
      full: new Date(date).toLocaleString(),
      time: new Date(date).toLocaleTimeString(),
    });
  }, [date]);

  return safeDate;
};
