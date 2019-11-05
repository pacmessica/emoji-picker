# Emoji Picker

Emoji Picker is a simple project which displays a selected emoji from a drop-down list. As an MVP I implemented a stylized emoji picker popup which has a scrollable list of all the emojis organized by category, along with a bottom bar with category selection to make it easier for users to navigate the list.

Challenges included finding a popover library. I initially tried 'react-popover' which I liked because it looked like a clean and simple implementation; however, from what I could tell, it wasn't possible to render a complete react component in the popup. I chose the package 'react-popper' because it didn't have that limitation. Due to time-constraints, some code organization was sacrificed for functionality. There are a few magic numbers, most notably in the styles, which depend on other values to calculate their own value. As a trade-off, I wrote a few comments to clarify where these numbers came from. In the future, these values should be made constants and dependent values should be calculated accordingly.

# Time Spend on Tasks

- finding popover package and implement simple popover: 40min
- find scrollable list package, implement initial emoji and category list with selectable emoji: 45min
- style popup box (including arrow): 35min
- close popover when clicking outside box: 20min
- add bottom bar menu for selecting categories: 35min
- minor bug and style fixes: 20min

# Emoji Picker Project Skeleton

made with create-react-app

Before running make sure to call:
`$ npm install`

To run a dev server, call:
`$ npm start`

File breakdown:
- components: folder for React components
    - EmojiButton: button component for opening the emoji picker.  The picker should position itself relative to this button dynamically.
    - EmojiDisplayer.js: component for displaying emojis, nothing needs to be changed here
    - EmojiPicker.js: main file to work on, write the code for the emojiPicker here.
    - emojis.js: helper file with lists of emojis.  Feel free to use or not
- redux: folder for all Redux files
    - actions.js
    - reducers.js
    - selectors.js
    - store.js
- App.css: the main css file for the react app
- App.js: the main file for the react app
- package.json: add libraries here, using `npm --save`
- *and many more* - these shouldn't need to be touched



