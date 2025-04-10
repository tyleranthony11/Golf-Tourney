// Converts date from the default form "2025-01-01" to "January 1st, 2025" for readibility 
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");

  const date = new Date(Date.UTC(year, month - 1, day));

  const adjustedDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );

  const formattedDay = adjustedDate.getUTCDate();
  const formattedMonth = adjustedDate.toLocaleString("default", {
    month: "long",
  });
  const formattedYear = adjustedDate.getUTCFullYear();

  const suffix =
    formattedDay % 10 === 1 && formattedDay !== 11
      ? "st"
      : formattedDay % 10 === 2 && formattedDay !== 12
      ? "nd"
      : formattedDay % 10 === 3 && formattedDay !== 13
      ? "rd"
      : "th";

  return `${formattedMonth} ${formattedDay}${suffix}, ${formattedYear}`;
}

export { formatDate };
