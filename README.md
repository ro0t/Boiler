# Boiler
Another javascript framework, but this one has Swag, Emojis and Vue! 👾 made by *Adam* from https://igital.co

Including:
*	Vue.js
*	Hot 🔥 reloading dev server
*	Swag Sass Framework 💎
*	Super simple responsive Css ⭐️
*	ES6 Javascript 😎
*	Did I mention Emojis already? ⛄️

## Responsive example
![Responsive example with Boiler](example.gif)

## Configuration
Before you install and run the webpack compiler, edit the config ***/config/settings.json*** and insert your values there.

## Install and start swaggin'
```
git clone https://github.com/ro0t/Boiler.git
cd Boilertal
yarn
npm run dev
```

## Vue Components
Insert your Vue components at ***/app/src/components*** and configure the main component called _main_.
The main component has access to all the middleware supplied in ***app/bootstrap.js*** and configured in ***app/src/app.js***

## Stylesheets
Edit the config files in ***/app/style/config/*** to fit your needs.
Use styled scoping for Vue components, you can import the **Swag sass framework** to get all the hot mixins and variables like this:
```
<style lang="scss" scoped>
	@import '../swag';

	h1 {
		font-size: 2em;
		font-weight: 100;
		color: $main;

		@include size('large') {
			color: $avocado;
		}

		@include size('medium') {
			color: $strawberry;
		}

		@include size('small') {
			color: $pumpkin;
			font-size: 1.5em;
		}
	}
</style>
```

## Boiler Framework
Put your websites javascript into ***/app/src/***

## The checklist
In the project you can find a **CHECKLIST.md** file to help you prepare for launching your website.

*	[x] Started using Boilertal
*	[x] Imported the Igital Swag Sass Framework
*	[ ] Created your Vue components
*	[ ] Favicon
*	[ ] Meta description and default open graph tags have been added
*	[ ] Google Analytics ID inserted
*	[ ] Minified Javascript & CSS
*	[ ] Images have been optimized
*	[ ] Tested in all browsers (except IE 🤮)
*	[ ] Proofread all content
*	[ ] Make sure all links work, test clicking on all of them 😈
*	[ ] Add a sitemap
*	[ ] Validation, validate them forms!!1
*	[ ] Added a Print stylesheet? Check how your web looks in print mode CMD+P
*	[ ] Test your entire website... 🤡

## Special thanks
The web penguin Jón Þór for showing me 30 Seconds of CSS. 😍
Thanks to Atomiks (https://github.com/atomiks/30-seconds-of-css) for all the tips and tricks. ⭐️
