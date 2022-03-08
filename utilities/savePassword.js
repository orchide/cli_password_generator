const fs = require('fs')
const os = require('os')
const path = require('path')



const savePassword = (password) => {
 fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', '666', (e, id) => {
     fs.write(id, password + os.EOL, null , 'utf-8', () => {
         fs.close(id, () => {
            console.log('Password has been saved to password.txt');
         })
     })
 })
}


module.exports = savePassword

