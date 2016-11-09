/**
 * Created by Sufiyan on 9/10/2016.
 */
module.exports = function (app, mongoose) {


    /**
     * GET HOME PAGE
     *
     * */


    /*app.post('/signin', app.api.User.signin);*/

    app.post('/showgoal', app.api.User.showgoal);
    app.post('/deletegoal', app.api.User.deletegoal);
    app.post('/editgoal', app.api.User.editgoal);
    app.post('/profile', app.api.User.profile);

    app.get('/', function (req, res, next) {
        res.sendStatus(200);
    });

}
