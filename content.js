chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    for (
      array = document.getElementsByTagName("input"), i = 0;
      i < array.length;
      i++
    )
      "password" == array[i].getAttribute("type") &&
        array[i].setAttribute("type", "text");
  }
});
