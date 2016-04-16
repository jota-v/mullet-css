# Mullet CSS
<img src="https://raw.githubusercontent.com/jvnni/mullet-css/master/logo.jpg" alt="mullet css" style="display:block">
<br>
<strong>Just a little help for your style!</strong>

## What the heck is this?
Mullet is not a UI framework (but can work together with one), it's just a tiny set of very useful CSS utilities. It can help you speed up some of the styling process with some basic layout, typography, transfoms, performance and accesibility helpers.

As an extra it has a small basic CSS reset, it's not a subsitute for nomalize, if not an extra layer you can use on top of it.

Inspired by the [mullet](https://en.wikipedia.org/wiki/Mullet_haircut), 80's hottest hairstyle.

## Installation
With Bower:
```bash
$ bower install mullet-css --save
```

With npm:
```bash
$ npm install mullet-css --save
```

## How to use
#### The CSS way:
If you want the complete set of utilities you can just grab the compiled css file in the dist folder.

#### The SASS way:
With sass you can import the `mullet-utilities.scss` file within the `src/sass` folder. This way you can customize which modules you want by setting the config variables to `true` or `false` within your project variables.


You can also override the namespace `mullet-` for a shorter one for your comfort.

## Utilities Available

#### Hide and Show
ClassNames:

`mullet-show` for showing element.

`mullet-hide` for hiding element

`mullet-hide--sm`

For hiding elements in < 768px screens (visible in tablets and desktop).

`mullet-hide--md`

For hiding elements in > 768px screens (visible in mobile, hidden in tablets and desktops).

`mullet-hide--lg`

For hiding elements in > 1024px screens (visible in mobile and tablets, hidden in desktops).

### Layout
ClassNames:

`mullet-display-b` for "display: block"

`mullet-display-ib` for "display: inline-block"

`mullet-display-i` for "display: inline"

`mullet-float-right` You know...

`mullet-float-left`

And so on...

`mullet-clear-right`
`mullet-clear-left`
`mullet-clear-both`

`mullet-clearfix` the typical clearfix snippet with support for ie8

### Typography
ClassNames:

For font-weight:

`mullet-text--100`

`mullet-text--300`

`mullet-text--400`

`mullet-text--600`

`mullet-text--700`

`mullet-text--800`

`mullet-text--900`

For font italic styles:

`mullet-text--italic`

Truncate text with ellipsis:

`mullet-text--truncate`

#### Accesibility
ClassName:

`mullet-accesibility-hidden`

It hides text from the UI but not from screen readers. Useful for icons for example.

### Media Object
ClassNames:

`mullet-mo` apply to media object wrapper

`mullet-mo__fit` apply to the fixed width element

`mullet-mo__fill` apply to the flexible element that fills the remaining space

`mullet-mo__fit--inverse` the fixed element takes position on the right instead of left. WARNING: in the markup its necessary that this element comes first in order than the fill element.

### Transforms
ClassNames:

`mullet-reflect` Mirror element.

`mullet-rotate--90`

`mullet-rotate--180`

`mullet-rotate--270`

### UI performance hacks
ClassNames:

`mullet-fixed` apply to fixed positioned elements to avoid repaints on scroll.

`mullet-animated` apply to animated elements for hardware acceleration. Don't abuse.

`mullet-animated--size` You shouldn't animate width or height, never. But if you do use this reliver.

`mullet-animated--position` Same as above, but for top right bottom left.

### Button reset
ClassName:

`mullet-btn-reset` for a button to look and behave much like a link.


## Collaboration
Bugs? Improvements? Suggestions? Leave me an issue!
Also pull requests are very appreciated.

## Credits

Juan Vanni

Github: jvnni

## License

You can do whatever you like with this.
