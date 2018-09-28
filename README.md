# react ssr bootstrap
This is a basic project to be used as a base for new projects. 
It uses webpack 4 and its configurated to work with Server Side Rendering
using node. The css and javascript files are being split to reduce size and
all async data loaded on the redux sagas are being called on the server.

### stoping node on windows
Sometimes windows will not stop the server and when you try to run it will throw an EADRINUSE error,
run the following code on cmd

```
taskkill /f /im node.exe
```