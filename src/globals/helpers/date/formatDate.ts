// @ts-nocheck
import { parseISO, format, intervalToDuration } from 'date-fns';

export const formatDate = (date: string) => format(parseISO(date), 'LLL yyyy');

export const getDurationDate = (startDate: string, endDate: string) => {
  const durationObj = intervalToDuration({
    start: parseISO(startDate),
    end: endDate ? parseISO(endDate) : new Date()
  });

  let durationStr = '';

  if (durationObj.years > 1) {
    durationStr = `${durationObj.years} yrs `;
  } else if (durationObj.years === 1) {
    durationStr = `${durationObj.years} yr `;
  }
  durationStr += `${durationObj.months} mos`;

  return durationStr;
};
