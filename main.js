(function() {
  function setIframeSource (url) {
    let youtubeId = parseYoutubeId(url);
    document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${youtubeId}`;
  }

  function parseYoutubeId(url) {
    return url.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)[2];
  }

  function setByButton () {
    let url = document.getElementById('videoUrl').value;
    return url;
  }

  function setByParam () {
    let params = new URLSearchParams(document.location.search.substring(1));
    let url = params.get("url");
    if (url) {
      setIframeSource(url);
      document.getElementById('videoUrl').value = url;
    }
  }

  document.getElementById('goButton').addEventListener('click', (event) => {
    event.preventDefault();
    setIframeSource(setByButton());
  });

  setByParam();

})();