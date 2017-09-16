(function () {
  const setIframeSource = (url) => document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${parseYoutubeId(url)}`

  const parseYoutubeId = (url) => url.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)[2]

  const getUrlInput = () => document.getElementById('videoUrl').value

  const getUrlParam = () => {
    const params = new URLSearchParams(document.location.search.substring(1))
    const url = params.get('url')
    document.getElementById('videoUrl').value = url
    return url
  }

  document.getElementById('goButton').addEventListener('click', (event) => {
    event.preventDefault()
    setIframeSource(getUrlInput())
  })

  const urlParam = getUrlParam()
  if (urlParam) {
    setIframeSource(urlParam)
  }

  const controlsForm = document.getElementsByClassName('controls__form')[0]
  const aTag = document.createElement('a')
  // javascript:(function(){url='https://ultracloud.host/widetube/?url='+encodeURIComponent(window.location.href);window.open(url);})();
  aTag.setAttribute('href', `javascript:(function(){url=${window.location.href}?url="+encodeURIComponent(window.location.href);window.open(url);})();`)
  aTag.classList.add('btn', 'green')
  aTag.innerHTML = 'Bookmarklet'
  controlsForm.appendChild(aTag)

})()