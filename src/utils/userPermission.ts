export function hasPermission (permission) {
  const user = this.$user;
  return user && user.permissions && user.permissions.includes(permission);
}
