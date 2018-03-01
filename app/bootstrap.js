import Application from './src/app';


let boilerApp = document.registerElement('boiler-app', Application);

document.body.append(new boilerApp());
