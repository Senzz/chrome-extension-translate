export function getBodyElement() {
  const el = document.scrollingElement || document.documentElement; return el;
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
