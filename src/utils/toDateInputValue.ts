const toDateInputValue = (date: Date) => {
  const year = date.getFullYear();
  const month = toStringDayOrMonth(date.getMonth() + 1);
  const day = toStringDayOrMonth(date.getDate());
  return `${year}-${month}-${day}`;
};

const toStringDayOrMonth = (value: number) => String(value).padStart(2, "0");

export default toDateInputValue;
