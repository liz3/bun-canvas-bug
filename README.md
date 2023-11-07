# canvas-repro
You will need the build deps for node canvas because it does not have a arm build.
mac:
```sh
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
```
then `npm i`(bun currently doesnt run the install script for building canvas, this should be fixed in 1.1).

```sh
bun index.mjs
```