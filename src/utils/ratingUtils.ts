export const getStars = (rating, maxStars = 5) => {
  const fullStars = Math.round(rating);
  const emptyStars = maxStars - fullStars;

  return "⭐".repeat(fullStars) + "☆".repeat(emptyStars);
};
