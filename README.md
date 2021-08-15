# Data Visualizer

## Project Info

`Total time spent`: ~4h 40min

### Decision Making

I've started with setting up the pages. I've decided to go with bootstrap as CSS framework and set up a quick navbar using React Router.

Afterward, I've implemented displaying the sample data.
I've decided to put the sample data into the project and not fetch it dynamically to avoid disabling CORS.

As suggested in the test description, I've added a "Render Data" (Start) button to display the data actively.
I've also added "Reset" and "Clear Cache" buttons for easier testing.

I've looked into multiple ways to measure rendering performance. I've first stumbled across the React Performance Tools: https://reactjs.org/docs/perf.html
I've decided not to use them as they are deprecated and instead use the simple Profiler API: https://reactjs.org/docs/profiler.html
To avoid passing data from the data page to the performance page, I've directly implemented the "persisting measurements"-extension and stored the measurements inside the local storage.

Loading the data from storage and displaying it in a table was straightforward.

### Extensions

- [x] Multiple alternative views of the test data (e.g. table, list, grid, graph, etc.)
- [ ] Multiple alternative views of the performance data (e.g. table, list, grid, graph, etc.)
- [ ] Storing multiple measurements, along with functionality to select, remove, aggregate, etc., said measurements.
- [x] Persisting measurements for future visits to the app (i.e. measurements are not lost on refresh).
- [ ] Adding a measurement detail page with routing to each measurement.
- [ ] Adding unit tests to ensure the validity of your code.
- [x] Making the app responsive such that it functions correctly and intuitively for various screen sizes
- [x] Integrating a CSS framework for consistent design

### Next Steps:

- Add proper types for data entries
- Add profiler to individual comments/threads to track more granular data than just evaluating rendering all comments/threads
- Potentially using the compound component pattern for switching data/performance views
- Clean up some shared CSS
- Moving some parts of data-page/performance-page into components
- Investigate profiling options for production if the performance data should be available in a production environment
- Add more extensions
- Setting up a simple backend using f.e. firebase to dynamically fetch the data and store performance measurements inside a database

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
