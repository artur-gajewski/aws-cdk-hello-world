export const handler = async function () {
  const now = new Date();

  const dd = now.getDate();
  const mm = now.getMonth() + 1;
  const yyyy = now.getFullYear();
  const date = `${dd}.${mm}.${yyyy}`;

  // ISO week number calculation
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);

  return {
    statusCode: 200,
    body: JSON.stringify({ date, week: weekNo }),
  };
};
