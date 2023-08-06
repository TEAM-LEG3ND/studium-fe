export const fetchData = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`fetching data from ${url} failed`);
  const data = await res.json();

  return data;
};

export const calculateDateDiff = (before: Date, after: Date) => {
  const SEC_IN_MSEC = 1000;
  const MINUTE_IN_MSEC = SEC_IN_MSEC * 60;
  const HOUR_IN_MSEC = MINUTE_IN_MSEC * 60;
  const DAY_IN_MSEC = HOUR_IN_MSEC * 24;

  const diffInMSec = after.getTime() - before.getTime();

  const dayDiff = Math.trunc(diffInMSec / DAY_IN_MSEC);
  const hourDiff = Math.trunc(
    (diffInMSec - dayDiff * DAY_IN_MSEC) / HOUR_IN_MSEC,
  );
  const minuteDiff = Math.trunc(
    (diffInMSec - dayDiff * DAY_IN_MSEC - hourDiff * HOUR_IN_MSEC) /
      MINUTE_IN_MSEC,
  );
  const secondDiff = Math.trunc(
    (diffInMSec -
      dayDiff * DAY_IN_MSEC -
      hourDiff * HOUR_IN_MSEC -
      minuteDiff * MINUTE_IN_MSEC) /
      SEC_IN_MSEC,
  );

  return {
    day: dayDiff,
    hour: hourDiff,
    minute: minuteDiff,
    second: secondDiff,
  };
};
