import Router from './src/boiler/router';
import Application from './src/app';

let app = new Application();

// Add your own middleware before rendering
app.setRouter(new Router());		// Here we link the Router, which will be passed into the main vue component

// Render the application
app.render();
