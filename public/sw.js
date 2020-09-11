console.log("SWDEV");
let cacheData = "QUIZ_APP"
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            data.addAll([
                "/static/js/main.chunk.js",
                "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple",
                "/static/js/bundle.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
            ])
        })
        .catch((err)=> {
            console.log("error", err)
        })
    )
})
this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
