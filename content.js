chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === "toggle") {
        document.body.style.filter = document.body.style.filter === 'grayscale(100%)' ? '' : 'grayscale(100%)';
    }
});
