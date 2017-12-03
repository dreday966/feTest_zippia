## How to run

```
npm install
npm start
```

## Architecture
### I used react framework and style component with inline style(for develop faster).this appliaction is simple, so I just use component `App` to store all state. I created two component `ForDesktop` and `ForMobile`, one for desktop, one for mobile. When window width is larger than 425,  display Desktop version, else display mobile version. The header is always the same, just a image.

## Files
### App.js
#### container component `App` which store all state.
### ForDesktop.js
#### container component `ForDesktop`.
### ForMoblie.js
#### container component `ForMoblie`.
### fetchData.js
#### function to fetch jobs.
### other files is unimportant

