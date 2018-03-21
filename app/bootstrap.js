import VueRouter from 'vue-router';
import Application from './src/app';
import ApplicationRoutes from './src/http/routes';

let app = new Application();

/**
*	If you want to pass props data to your master layout file,
*	you can uncomment the line below (app.setPropsData()) and
*	insert your own values there.
*
*	Note: You'll have to make sure your master layout supports
*	these props values.
*/
// app.setPropsData({});

/**
*	You can configure the VueRouter here, I recommend reading
*	https://router.vuejs.org/ before you configure anything.
*
*	Your routes can be found at /app/src/http/routes.js
*/
app.setRoutes(new VueRouter({
	mode: 'history',
	routes: ApplicationRoutes
}));

/**
*	Lets render the Boiler application, off we go 🚀
*
*	Big clap for you since you made it here 👏
*/
app.render();
