self.addEventListener('message', async (e) => {
  const url = e.data.url;
  try {
    const response = await fetch(url);
    const text = await response.text();
    self.postMessage({ success: true, content: text });
  } catch (err) {
    self.postMessage({ success: false, error: err.toString() });
  }
});
