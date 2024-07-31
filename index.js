// export/import
// npm init es6
// create a index .js
// export the greet function from greet.js
// import the greet function in index.js
import chalk from 'chalk';
import {greet} from './greet.js';
import cowsay from 'cowsay';
import {yo} from './yo.js';
import figlet from 'figlet';
console.log(greet('Ntombi'));
console.log(yo('Thabo'));
// import greet from './greet.js'
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

const  cowMessage = cowsay.say({
    text: "Hello, World!"
}) 
console.log(chalk.bgRed.whiteBright("-----------------------"));

console.log(chalk.bgBlue(cowsay.say ({
    text: "Hello, World!"
})));

figlet ('Hello, Nosimilo!', function(err, data){
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

