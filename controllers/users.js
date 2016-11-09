/**
 * Created by Sufiyan on 9/17/2016.
 */
module.exports = function (app, mongoose) {
    app.api.User = {};


    app.api.User.deletegoal = function (req, res, next) {



    }

    app.api.User.editgoal = function (req, res, next) {
        /*/!*app.db.models.userGoalSchema.findOneAndUpdate({_id: req.body.id}, {$set:{day:req.body.day,userDescription:req.body.userDescription,userGoal:req.body.userGoal}}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }

            res.send('its edit goal' + req.body.id);*!/
        })*/



    }
    app.api.User.showgoal = function (req, res, next) {
        /*app.db.models.userGoalSchema.find({}, function (err, users) {
            if (!err) {
                res.send(users);
            }
        });*/

    }
    app.api.User.profile = function (req, res, next) {
        app.db.models.userGoalSchema(
            {
                "name": req.body.name,
                "email": req.body.email,
                "number": req.body.number,
                "comment": req.body.comment,
                "electrician": req.body.electrician,
                "mason": req.body.mason,
                "upsservice": req.body.upsservice,
                "plumber": req.body.plumber,
                "gardner": req.body.gardner,
                "generator": req.body.generator,
                "carpenter": req.body.carpenter,
                "welder": req.body.welder,
                "cctv": req.body.cctv,
                "painter": req.body.painter,
                "acservice": req.body.acservice,
                "interiordesigning": req.body.interiordesigning


                /*"userStatus":req.body.userStatus*/
            }).save(function (err) {
                if (!err) {
                    console.log("Saved Your Goal In Database")
                }
                else {
                    console.log("its error because your parameter is not saved")
                    console.log(err)

                }
            }
        );
        res.send("Hello Its saved your order in data base")
    };


}

/*
name:{type:String, required:true},
email:{type:String, required:true},
number:{type:Number, required:true},
comment:{type:String, required:true},
plumber:{type:String, required:true},
massioner:{type:String, required:true},
electrcian:{type:String, required:true}

*/
