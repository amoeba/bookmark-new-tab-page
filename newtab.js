
const renderBookmarks = function (bookmarks) {
  bookmarks.forEach(bookmark => {
    if (bookmark.children) {
      return;
    }

    var rootEl = document.createElement("div");
    rootEl.classList.add("bookmark")

    var linkEl = document.createElement("a");
    linkEl.href = bookmark.url
    linkEl.innerText = bookmark.title
    rootEl.appendChild(linkEl)

    var urlEl = document.createElement("span");
    urlEl.classList.add("url");
    urlEl.innerHTML = bookmark.url;
    rootEl.appendChild(urlEl)

    document.querySelectorAll(".bookmarks")[0].appendChild(rootEl)
  });
}

document.addEventListener("readystatechange", function (e) {
  chrome.bookmarks.getTree(function (tree) {
    const bookmarks = tree[0].children[0].children;
    renderBookmarks(bookmarks)
  });
});
