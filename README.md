# widetube
![Image of Widetube](https://user-images.githubusercontent.com/17126960/30597122-0ac3cce2-9d24-11e7-98d5-e5f842caa207.png)

A Youtube viewer that's always full-width
When viewing youtube tutorials on my laptop @ 1440x900 resolution, youtube wasn't full window width so I whipped together something quick. I was having a good time so I kept improving and building. Built a bookmarklet. It was a good oportunity to learn how to put together a gulp build system to handle ES6, SCSS, stylelint, and live reload with BrowserSync.

### Getting Started
Clone this repo, then:
* `npm install`
* `npm run dev` -> runs `gulp serve`
* `npm run build` -> runs `gulp` -> build into `build/`

Other Gulp tasks:
* `gulp` -> build into `build/`
* `gulp lint-css`
* `gulp serve`
