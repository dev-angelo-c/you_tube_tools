
// Toggle Timestamps off
// Paste into Console

let parsed_transcripts = Array.from(document.querySelectorAll(".segment")).map( i => i.innerText )[0]


const buildDate = () => {
  const versionBuildDate = new Date();
  return (
    `${versionBuildDate.getMonth()}/${versionBuildDate.getDay()}/${versionBuildDate.getFullYear()}`
  );
}
