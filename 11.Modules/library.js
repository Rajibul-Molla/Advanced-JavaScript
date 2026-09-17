export let message = "ES6 Modules";


export function user(name ){
    console.log("Hello " +name + " ! Welcome to this course");
}


export class test{
    constructor(){
        console.log("Constructor method is called from module file");

    }

}

// Or you can export in one line 
// export {message,user,test};





// Default function
export default function(){
    console.log("Message from default function");
}



// Bridge 
export function x(){
    console.log("This is from library imported to bridge to main");
}