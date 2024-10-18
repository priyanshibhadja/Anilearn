const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Signup,Suggestion,Profile,Pickedtopic,Uploadvideo,Uploadcourse, connectToDatabase } = require('./dbschemas');
const bcrypt =  require('bcrypt');
const SECRET_KEY = "NOTESAPI";
const jwt = require("jsonwebtoken");

const app = express();
const port = 3002;

connectToDatabase(); 

app.use(cors());
app.use(bodyParser.json());

// app.post('/signup', async (req, res)=>{
//   const {name, email, password, role} = req.body;

//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);

//   try{
//     const user = new Signup({
//       name:name,
//       email: email,
//       password: password,
//       role:role,
//     });
//      const saveduser=await user.save();
//      console.log(saveduser);
//   }catch(e){
//     console.error('Error creating user:'+ e);
//     res.status(500).json({ e: 'An error occurred' });
//   }
// })


// Authentication***************************************************************************************************************
app.post('/signup', async(req,res) => {

  try{
    const {password, email,name,role} = req.body;
  //check if the user already exists in database
  const userExist = await Signup.findOne({email : email});
  if(userExist){
    return res.status(400).json ("User with this email is already exist");
  }
  const hashedPassword = await bcrypt.hash(password,10);

  const result = await Signup.create ({
    name:name,
    email:email,
    password : hashedPassword,
    role:role
  });

  const token =jwt.sign({email:result.email, role:result.role, id:result._id, name:result.name}, SECRET_KEY);
  res.status(201).json({token:token ,  user: result}) ;
  console.log(token);
  }catch(e){
     console.log(e);
     res.status(500).json({err: "Internal Server Error"});
  }
})

app.post('/login', async(req,res) => {
  const {lemail, lpassword, lrole}= req.body;
 try{
  const userExist = await Signup.findOne({email : lemail});
  if(!userExist){
    return res.status(404).json ("User with this email is not exist");
  }

  const matchpass = await bcrypt.compare (lpassword, userExist.password);
  if (!matchpass ) {
    return res.status(400).json("Invalid Password");
  }

  if(userExist.role === lrole){
    const token =jwt.sign({email:userExist.email, role:userExist.role, id:userExist._id, name:userExist.name}, SECRET_KEY);
  res.status(201).json({token:token ,  user: userExist}) ;
  }else{
    return res.status(400).json("Invalid role");
  }

 }catch(e){
  console.log(e);
     res.status(500).json({err: "Internal Server Error"});
 }


})

// Suggetions***************************************************************************************************************
app.post('/suggetion', async (req, res) => {
  const { topicname, topicdes,suggetioncategory } = req.body;

  try {
    const suggestion = new Suggestion({
      topicname: topicname,
      topicdes: topicdes,
      suggetioncategory: suggetioncategory,
    });

    const savedSuggestion = await suggestion.save();
    console.log(savedSuggestion);
    res.status(200).json(savedSuggestion);
  } catch (error) {
    console.error('Error creating suggestion:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.get('/fetchsuggetion', async(req,res) => {
  try{
    const sug= await Suggestion.find();
  res.json(sug);
  }
  catch(e){
    console.log(e);
  }
})


// app.post('/login', async (req, res) => {
//   console.log(req.body.email)
//   try {
//     const check = await Signup.findOne({ email: req.body.email });
//     if (check && check.password === req.body.password) {
//       res.json({ success: true });
//     } else {
//       res.json({ success: false});
//     }
//   } catch (error) {
//     console.error('An error occurred', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });






// Profile update***************************************************************************************************************
app.put('/profile', async (req, res) => {
  try {
    const { email, phone, role, name } = req.body;

    // Check if the profile with the specified email exists
    let updatedProfile;
    const existingProfile = await Profile.findOne({ email });

    if (existingProfile) {
      // Update profile if it exists
      updatedProfile = await Profile.findOneAndUpdate(
        { email},
        { $set: { phone, occupation: role } },
        { new: true }
      );
    } else {
      // Create a new profile if it doesn't exist
      updatedProfile = await new Profile({
        email,
        phone,
        occupation: role,
        // Include fullname if it's part of the schema
        ...(name && { username: name }),
      }).save();
    }

    console.log(updatedProfile);
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating/creating profile:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/fetchprofile', async(req,res)=>{
    try{
      const prof = await Profile.find();
      res.json(prof);
    }catch(e){
      console.log(e);
    }
})



// picked topics***************************************************************************************************************
app.post('/picked', async(req,res)=>{
  const {Educatoremail, topicname, topicdes, suggetioncategory} = req.body;

    try{
      const pick = new Pickedtopic({
        topicname:topicname,
        topicdes:topicdes,
        suggetioncategory:suggetioncategory,
        Educatoremail:Educatoremail,
        picked:true,
      })

      const picked = await pick.save() ;
      console.log(picked);
      res.status(200).json(picked);

      const deletedEntry = await Suggestion.findOneAndDelete({topicname,topicdes });
    
    }catch(e){
      console.error('Error picking topic:', e);
    res.status(500).json({ error: 'An error occurred' });
    }
})

app.get('/fetchpicked', async(req,res)=>{
  try{
    const pick = await Pickedtopic.find();
    res.json(pick);
  }catch(e){
    console.log(e);
  }
})



// Videoupload************************************************************************************************************
app.post('/videoupload', async (req, res) => {

  
  const { secure_url,email, topicname, topicdes, topictime,videocategory } = req.body;
  // console.log(topictime);

  // console.log(secure_url);
  try {
    const video = new Uploadvideo({
      secure_url:secure_url,
      videoemail:email,
      topicname:topicname,
      topicdes:topicdes,
      topictime:topictime,
      videocategory:videocategory,
    });
    const  savedVideo = await video.save();
    console.error(savedVideo);
    res.status(201).json({ message: 'Video uploaded successfully' });
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/fetchupload',async(req, res) => {
  try{
    const video = await Uploadvideo.find();
    res.json(video);
  }catch(e){
    console.log(e);
  }
})



// courseupload************************************************************************************************************
app.post('/courseupload', async (req,res)=> {
  const { secure_url,thumbnail_url,email, coursetitle, coursedes, coursecategory,coursevideocount, courseduration, courseprice,courselevel } = req.body;

  try{
    const course = new Uploadcourse({
      secure_url:secure_url,
      thumbnail_url:thumbnail_url,
      courseemail:email,
      coursetitle:coursetitle,
      coursedes:coursedes,
      coursecategory:coursecategory,
      coursevideocount:coursevideocount,
      courseduration:courseduration,
      courseprice:courseprice,
      courselevel:courselevel,
    })

    const savecourse = await course.save();
    console.error(savecourse);
    res.status(201).json({ message: 'Course uploaded successfully' });

  }catch(error){
    console.error('Error uploading video:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/fetchcourses',async(req, res) => {
  try{
    const course = await Uploadcourse.find();
    res.json(course);
  }catch(e){
    console.log(e);
  }
})





app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
