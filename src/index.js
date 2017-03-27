require("babel-polyfill");

function doubleAsync (value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value*2), 3000);
  })
}
//And as you can see, we're setting a timeout to call the resolve callback with the original value multiplied by two
//We are waiting 3000ms before calling back resolve

async function myAsyncFunction (){
  var answer = await doubleAsync(1337);

  console.log(answer);
}

myAsyncFunction();

/*It's going to use double asynced to generate a promise await the result and
finally log the enter to the console after the promise is resolved. First I'll create a variable here called answer to hold our result.
And here is where the magic happens. Using the await keyword, we can just assign the result of calling doubleAsync to the answer variable.
No callbacks necessary. Now that we've got our answer just log into the console. We'll wrap it up by calling my async function at the end of the file.
And that's our application. */

/* on terminal -
npm run build    ---> this will build the application
node build/index.js  --> runs the application
*/
