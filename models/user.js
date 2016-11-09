/**
 * Created by Sufiyan on 9/17/2016.
 */
module.exports = function (app, mongoose) {

    /* User Basic Schema*/
    var userSchema = new mongoose.Schema({
        userFullName: {type: String, required:true},
        userEmail: {type: String, unique:1, required:true},
        userPassword: {type: String, required:true},
        /*   userStatus: {type: String, required:true}*/
    });

    app.db.model('basicSchema', userSchema);


    var goalSchema=new mongoose.Schema({
        name:{type:String, required:true},
        email:{type:String, required:true},
        number:{type:Number, required:true},
        comment:{type:String, required:true},
        electrician:{type:String},
        mason:{type:String},
        upsservice:{type:String},
        plumber:{type:String},
        gardner:{type:String},
        generator:{type:String},
        carpenter:{type:String},
        welder:{type:String},
        cctv:{type:String},
        painter:{type:String},
        acservice:{type:String},
        interiordesigning:{type:String}

    })

    app.db.model('userGoalSchema',goalSchema)

}
/*
name: user.name,
    number: user.number,
    email: user.email,
    comment:user.comment,
    plumber:user.plumber,
    massioner:user.massioner,
    electrcian:user.electrcian*/
