const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cruddb",
    (err) => {
        if (!err)
            console.log('MongoDB connection established successfully');
        else
            console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    }
);

module.exports = mongoose ; // module is current module and exports is an object which exposes the js file as a module

