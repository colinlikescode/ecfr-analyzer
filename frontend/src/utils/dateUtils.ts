/**
 * Formats a date string (YYYY-MM-DD) into a more readable format (MM/DD/YYYY)
 * @param dateString Date string in YYYY-MM-DD format
 * @returns Formatted date string in MM/DD/YYYY format
 */
export const formatDateForDisplay = (dateString: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

/**
 * Gets today's date in YYYY-MM-DD format
 * @returns Today's date in YYYY-MM-DD format
 */
export const getTodayFormatted = (): string => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};
