### tips
if follow the instruction to write
`require("!style!css!./style.css");` compile failed.

The correct way is to write as
`require("!style-loader!css-loader!./style.css");`


### Run

```
webpack ./entry.js bundle.js
```

```
webpack-dev-server ./entry.js bundle.js
```
