export function redirect () {
  // @ts-ignore
  if (window.location.pathname !== location) {
    // @ts-ignore
    window.location.href = location;
  }
}
