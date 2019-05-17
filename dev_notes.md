
While building in this app in folders, folder organisation and heirachy is important. refrence everything correctly 
-  "./*path/name" -

the displayed app is built in app.js file.

which sends to index.js (see the imports at top of each file) app.js uses app.css 

app.css is good for precise css like individual classes. 

Use index.css to apply global styling e.g body tags, global fonts.
build goes app.js => index.js => index.html (public folder).

service worker is backend will get replaced withour own back end soon which i will be able to explain properly. for now it declares online offline and creates a server. 

when building in app.js make sure you decalre functions and classes so the css can be called and applied correctly. function app is set up as a test currently. 

remember that javascript is read in order top to bottom so write functions in a logical order for running on web page eg. if something is required before something else runs then write it in order.