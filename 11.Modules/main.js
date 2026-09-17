import { message,user,test as t } from "./library.js";

/* You can inport all variable , methods from a file by 
import * as hole_file from "./library.js";
console.log(hole_file.message);
*/


console.log(message);
// document.body.innerHTML = message;


user("Rajibul");

let obj= new t();



// import default function you can also remove default as . js engine will understand that we are reffering to the default function

import {default as d} from "./library.js";
d();



// Bridge
import {x} from "./bridge.js";
x();