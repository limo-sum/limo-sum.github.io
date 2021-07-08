export const goToPage = (addr) => {
  window.open(addr, "_blank");
};

export const dateFormatter = (value) => {
  const date = new Date(value);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = value ? months[date.getMonth()] : "";
  return date.getFullYear() ? month + " " + date.getFullYear() : "현재";
};

export const monthDiff = (d1, d2) => {
  let months;
  const date1 = new Date(d1);
  const date2 = d2 ? new Date(d2) : new Date();
  const year = date2.getFullYear() - date1.getFullYear();

  months = year * 12;
  months -= date1.getMonth();
  months += date2.getMonth();

  const years = `${year}년 ${months % 12 === 0 ? "" : (months % 12) + "개월"}`;

  return months <= 0 ? "" : months < 12 ? months + "개월" : years;
};
