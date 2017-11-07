## Setup
1. Open your console and clone this directory
2. `cd` into the project and run:
 - `npm init -y`
 - `npm install --save react react-dom next`
3. run `npm run dev`
4. Navigate to `http://localhost:3000/` in your browser

## Dependencies
1. You need a console like [Cmdr](http://cmder.net/) if you're on a Windows
2. Install [node package manager](https://www.npmjs.com/get-npm) (npm) or yarn if you prefer
3. [NextJS](https://learnnextjs.com/)


## Deploy to static HTML
1. Create a `next.confog.js` in your root folder - [example](https://www.npmjs.com/package/next#static-html-export)
2. Run `npm next build`
3. FTP the contents of your `out` folder
