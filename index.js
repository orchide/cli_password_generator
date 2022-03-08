#!/usr/bin/env node

const program = require('commander');
const createPassword = require('./utilities/createPassword')
const savePassword = require('./utilities/savePassword')

program.version('1.0.0').description('A password generator written in JS by OrchideSR')

program.option('-l, --length <number>', 'length of password', '8')
       .option('-s, --save', 'save password to password.txt')
       .option('-nn, --no-numbers', 'remove numbers')
       .option('ns,--no-symmbols', 'remove symbols')
       .parse();


const {save , numbers, symbols, length} = program.opts();

const generatedPassword = createPassword(length , numbers , symbols, length) ;

if(save) {
       savePassword(generatedPassword)
}

console.log(generatedPassword);