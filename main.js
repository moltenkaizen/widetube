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

})()