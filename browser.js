const urlBar = document.getElementById("url-bar");
const goBtn = document.getElementById("go-btn");
const reloadBtn = document.getElementById("reload-btn");
const browserFrame = document.getElementById("browser-frame");

// Load URL
function loadURL() {
  let url = urlBar.value.trim();
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  browserFrame.src = url;
}

// Event listeners
goBtn.addEventListener("click", loadURL);
urlBar.addEventListener("keypress", e => {
  if (e.key === "Enter") loadURL();
});
reloadBtn.addEventListener("click", () => {
  browserFrame.contentWindow.location.reload();
});
