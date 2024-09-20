
// Toggle Timestamps off
// Paste into Console

const parsed_transcripts = Array.from(document.querySelectorAll(".segment")).map( i => i.innerText )[0]

// Build MM/DD/YYY
const buildDate = () => {
  const versionBuildDate = new Date();
  return (
    `${versionBuildDate.getMonth()}/${versionBuildDate.getDay()}/${versionBuildDate.getFullYear()}`
  );
}
