/**
 * Created by Sufiyan on 9/17/2016.
 */
module.exports = function (app,mongoose) {

    app.api = {};

    require('./users')(app,mongoose);

};