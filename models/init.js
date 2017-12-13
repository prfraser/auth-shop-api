const mongoose = require('mongoose');

// Use the promise functionality built into Node
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds137256.mlab.com:37256/auth-shop`, { useMongoClient: true })
	.then(() => {
		console.log('Successfully connected to database!')
	})
	.catch(error => {
		// Something went wrong!
		console.log('Error connecting to mongodb', error)
	})

module.exports = mongoose;
