const bcrypt = require('bcrypt')

// register
bcrypt.hash("secret", 10, function(err, hash) {
    
    console.log(err)
    console.log(hash)
});

// login
hashedPassword = "$2b$10$cZrhCpQx5A0tJDt3/LZ/..uSe4JfWcIgmGGgQ9KtAnYHn8c16GBUe"

bcrypt.compare("secret", hashedPassword, (err, isMatch) => {
    console.log(isMatch)
})