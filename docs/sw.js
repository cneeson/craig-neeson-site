/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f743c6df88decc6a468a.js"
  },
  {
    "url": "styles.c626abe94364f81ec4bb.css"
  },
  {
    "url": "styles-a9df3eb4b8abd78e60b7.js"
  },
  {
    "url": "app-246ba922e2ff926193f7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c20aa8e54493cc1bbedb.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bc555ee7a7ff4e86d4c39f30815af9e2"
  },
  {
    "url": "component---src-pages-404-js-88affd7e9c0bf3d66911.js"
  },
  {
    "url": "1-d7e3a38f5a4e487f8d44.js"
  },
  {
    "url": "static/d/233/path---404-html-516-62a-sHMtsm0mkrz6wAxA7RTmDRG4.json"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "68b00ea96d95692d43aecb7f281d71a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
