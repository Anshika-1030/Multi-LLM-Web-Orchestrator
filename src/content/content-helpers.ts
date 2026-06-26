export function getPageText() {
  return (
    document.body
      ?.innerText || ""
  )
    .replace(/\s+/g, " ")
    .slice(0, 10000);
}
