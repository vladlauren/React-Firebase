export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;

  if (currentUser.userRoles.includes("admin")) return true;

  return false;
};
