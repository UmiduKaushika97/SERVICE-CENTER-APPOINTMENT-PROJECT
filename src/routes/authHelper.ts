// src/utils/authHelper.ts
export const getStoredUser = () => {
  const stored = localStorage.getItem("authUser");
  return stored ? JSON.parse(stored) : null;
};
