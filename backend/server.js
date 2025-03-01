//App config.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const https = require('https');
const path = require('path');
const passport = require('./config/passportConfig');

//Import Routess
const studentRegister = require('./routes/register/studentregister');
const studentLogin = require('./routes/login/studentLoginRoute');
const studentProfile = require('./routes/profiles/studentProfileRoute');
const oAuthRoutes = require('./routes/oAuthRoutes');
const logOut = require('./routes/logout');
const getHome = require('./routes/home');
const forgotPassword = require('./routes/forgotPasswordRoute');
const resetPassword = require('./routes/resetPassword');
const { request } = require('https');

//dotenv config.
dotenv.config();

//Initialize APP
const app = express();

//Application Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: 'https://www.udbhavx.com/',
//     methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//   })
// );


const origins = [ "https://www.udbhavx.com/",'http://localhost:3000','http://localhost:5000','https://udb-vercel-demo.vercel.app/'];

app.use((req,res,next)=>{
  console.log("INc Reqq:",req.method,req.url,"from",req.headers.origin);
  next();
})

app.use(
  cors({
    origin: function(origin,callback){
      if(!origin || origins.includes(origin)){
        console.log("Cors alloweddd",origin)
        callback(null,true);
      }else{
        console.log("Cors not alloweddd",origin)
        callback(new Error("Cors not alloweddd"));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus:200,
  })
);

// Log all requests to check if your server is receiving them

app.options("*",(req, res) => {
  res.setHeader("Access-Control-Allow-Methods",'GET, POST, PUT, DELETE,OPTIONS');
  res.setHeader("Access-Control-Allow-Headers",'Content-Type, Authorization');
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.sendStatus(200);
});

app.options('*', cors());
// app.use(() => (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://www.udbhavx.com/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   // res.header("Access-Control-Allow-Origin": "http://localhost:3000"
//   next();
// });





//Database Connectivity

// mongoose
//   .connect(process.env.MONGODB_URI) // This will now use the secret from GitHub Actions
//   .then(() => console.log('Connected to MongoDB successfully'))
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//     console.log('MongoDB URI:', process.env.MONGODB_URI); // Consider removing this in production
//   });
// Github actions
// const mongodbUri = process.env.MONGODB_URI || 'mongodb://udbhav:udbhavx@18.118.233.156:27017/userdata?directConnection=true&serverSelectionTimeoutMS=2000'; // Fallback value
// const mongodbUri = process.env.MONGODB_URI; // Fallback value

console.log('MongoDB URiiiiiii:','mongodb://udbhav:udbhavx@18.118.233.156:27017/userdata?directConnection=true&serverSelectionTimeoutMS=2000');

// mongoose
//   .connect(`mongodb://${process.env.MONGODB_URI}`) // Removed the template literal
//   .then(() => console.log('Connected to MongoDB successfully'))
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//     console.log('MongoDB URI:', mongodbUri);
//   });
mongoose
  .connect('mongodb://udbhav:udbhavx@18.118.233.156:27017/userdata?directConnection=true&serverSelectionTimeoutMS=2000') // Removed the template literal
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // console.log('MongoDB URI:', mongodbUri);
  });

  // mongoose
  // .connect(`${process.env.MONGODB_URI}`)
  // .then(() => console.log('Connected to MongoDB successfully'))
  // .catch((err) => console.error('MongoDB connection error:', err));
  
  // mongoose
  // .connect(`${process.env.MONGODB_URI}`)
  // .then(() => console.log('Connected to MongoDB successfully'))
  // .catch((err) => console.error('MongoDB connection error:', err));
  


app.use(express.static(path.resolve(__dirname,"../frontend/build")));

app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../frontend/build","index.html"));
});

//Routes
app.use('/register/student', studentRegister);
app.use('/login/student', studentLogin);
app.use('/profile/student', studentProfile);

app.use('/logout', logOut);
app.use('/home', getHome);

// app.use('/auth', oAuthRoutes);
app.use('/forgot-password', forgotPassword);
app.use('/reset-password', resetPassword);

app.get('/', (req, res) => {
  res.send('Hello from server');
}); 

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

//Server setup
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

//HTPPS server
// const httpsServer = https.createServer(app).listen(PORT, () => {
//   console.log(`server started at http://localhost:${PORT}`);
// });