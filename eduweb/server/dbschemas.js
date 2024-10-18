const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const signupSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
});


const suggestionSchema = new Schema({
    topicname: {
        type: String,
        required: true
    },
    topicdes: {
        type: String,
        required: true
    },
    suggetioncategory: {
        type: String,
        required: true
    }
});


const profileSchema = new Schema({
    username: {
        type: String,
    },
    // fullname: {
    //     type: String,
    // },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    occupation: {
        type: String,
    },
})


const PickedtopicsSchema = new Schema({
    Educatoremail: {
        type: String,
    },
    picked: {
        type: Boolean,
    },
    topicname: {
        type: String,
    },
    topicdes: {
        type: String,
    },
    suggetioncategory: {
        type: String,
    },
    topictime: {
        type: String,
    }
})




const UploadvideoSchema = new Schema({
    secure_url: {
        type: String,
    },
    videoemail: {
        type: String,
    },
    topicname: {
        type: String,
    },
    topicdes: {
        type: String,
    },
    topictime: {
        type: String,
    },
    videocategory: {
        type: String,
    },
})


const uploadcourseschema = new Schema({
    secure_url:{
        type :String ,
    },
    thumbnail_url:{
        type :String ,
    },
    courseemail:{
        type:String,
    }, 
    coursetitle:{
        type:String,
    }, 
    coursedes:{
        type:String,
    }, 
    coursecategory:{
        type:String,
    }, 
    coursevideocount:{
        type:Number,
    }, 
    courseduration:{
        type:Number,
    }, 
    courseprice:{
        type:Number,
    }, 
    courselevel:{
        type:String,
    }
    
})


module.exports = {
    Signup: mongoose.model('Signup', signupSchema),
    Suggestion: mongoose.model('suggestion', suggestionSchema),
    Profile: mongoose.model('profile', profileSchema),
    Pickedtopic: mongoose.model('Pickedtopic', PickedtopicsSchema),
    Uploadvideo: mongoose.model('uploadvideo', UploadvideoSchema),
    Uploadcourse: mongoose.model('uploadcourse', uploadcourseschema),
    connectToDatabase: async () => {
        try {
            await mongoose.connect('mongodb+srv://bhadjapriyanshi:priyanshi04@cluster0.3kxyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
           // await mongoose.connect('mongodb+srv://kavan2269:r0M4hRbLLZExonnO@kavan.ybbof1e.mongodb.net/?retryWrites=true&w=majority&appName=Kavan', {
            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    },
};