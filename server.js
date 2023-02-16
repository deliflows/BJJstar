const express = require('express');
const app = express();
const portNumber = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const { Instructor, OtherSkill, School, Skill, Student } = require('./models');
const bcrypt = require('bcrypt');
const session = require('express-session')
const cookieParser = require('cookie-parser');
require("dotenv").config()
app.use(bodyParser.urlencoded({ extended : true}));
// app.use(express.json());
// app.use(express.urlencoded({ extended : true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());
app.use(
    session({
        secret:'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 259200000
        }
    })
)
app.listen(portNumber, function(req, res){
    console.log(`Listening on port http://localhost:${portNumber}`);
})
function checkAuth(req, res, next) {
    // if there is user info in the session, continue
    if (req.session.user) {
      next();
    // or if the user is accessing the login page, same
    } else if (req.path == '/login') {
      next();
    // otherwise, redirect to login page
    } else {
      res.redirect('/login');
    }
  }

app.post('/registerschool', async function(req,res){
    const { nameOfSchool, schoolLocation, schoolUmbrella, schoolPhone, schoolWebsite, schoolPassword, schoolUsername } = req.body;
    let schoolHashPassword = await bcrypt.hash(schoolPassword, 10);
    let newSchool = await School.create({
        name: nameOfSchool,
        location: schoolLocation,
        umbrella: schoolUmbrella,
        phone: schoolPhone,
        website: schoolWebsite,
        username: schoolUsername,
        password: schoolHashPassword,
        createdAt: new Date(),
        updatedAt:new Date()
    })
    res.redirect("/login");
})
app.post('/registerinstructor', async function(req,res){
    const { instructorUsername, instructorPassword, instructorFirst, instructorLast, instructorEmail, instructorDOB, instructorBelt, instructorYears, instructorAbout } = req.body;
    let instructorHashPassword = await bcrypt.hash(instructorPassword, 10);
    let newInstructor = await Instructor.create({
        schoolid: null,
        username: instructorUsername,
        password: instructorHashPassword,
        first: instructorFirst,
        last: instructorLast,
        belt: instructorBelt,
        years: instructorYears,
        role: "Instructor",
        about: instructorAbout,
        email: instructorEmail,
        dob: instructorDOB,
        createdAt: new Date(),
        updatedAt:new Date()
    })
    res.redirect("/login");
})
app.post('/registerstudent', async function(req,res){
    const { studentUsername, studentPassword, studentFirst, studentLast, studentEmail, studentDOB, studentBelt, studentYears, studentAbout, studentPurpose } = req.body;
    let studentHashedPassword = await bcrypt.hash(studentPassword, 10);
    let newStudent = await Student.create({
        schoolid: null,
        username: studentUsername,
        password: studentHashedPassword,
        first: studentFirst,
        last: studentLast,
        belt: studentBelt,
        years: studentYears,
        purpose: studentPurpose,
        about: studentAbout,
        stars: 0,
        email: studentEmail,
        dob: studentDOB,
        instructorid: null,
        createdAt: new Date(),
        updatedAt:new Date()
    })
    res.redirect("/login");
})

app.post("/verificationstudent", async function (req, res){
    const { studentLoginEmail, studentLoginPassword } = req.body;
    let studentInformation = await Student.findOne({
        where: {email: studentLoginEmail}
    })
    let theResult = await bcrypt.compare(studentLoginPassword, studentInformation.password)
    if(theResult){
        req.session.user = studentInformation
        res.redirect('/mainstudent');
    }
    else{
        res.redirect('/login');
    }
})
app.post("/verificationinstructor", async function (req, res){
    const { instructorLoginEmail, instructorLoginPassword } = req.body;
    let instructorInformation = await Instructor.findOne({
        where: {email: instructorLoginEmail}
    })
    let theResult = await bcrypt.compare(instructorLoginPassword, instructorInformation.password)
    if(theResult){
        req.session.user = instructorInformation
        res.redirect('/maininstructor');
    }
    else{
        res.redirect('/login');
    }
})
app.post("/verificationschool", async function (req, res){
    const { schoolLoginUsername, schoolLoginPassword } = req.body;
    let schoolInformation = await School.findOne({
        where: {username: schoolLoginUsername}
    })
    let theResult = await bcrypt.compare(schoolLoginPassword, schoolInformation.password)
    if(theResult){
        req.session.user = schoolInformation
        res.redirect('/mainschool');
    }
    else{
        res.redirect('/login');
    }
})
app.post("/addskillstudent", async function (req, res){
    const { skillCategory, skillName, skillComment, skillYoutube, skillLearnedFrom } = req.body;
    let theStudentid = req.session.user;
    let newSkill = await OtherSkill.create({
        studentid: req.session.user.id,
        category: skillCategory,
        name: skillName,
        comment: skillComment,
        youtube: skillYoutube,
        url: null,
        learnedfrom: skillLearnedFrom,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    let studentStar = await Student.update({
        stars: req.session.user.stars + 1
    }, {
        where: {
           id: req.session.user.id 
        }
    })
    req.session.user.stars = req.session.user.stars + 1
    res.redirect("/mainstudent");
})
app.post('/searchskills', async function(req, res){
    const { searchSkills } = req.body;
    let theOtherSkills = await OtherSkill.findAll({
        where: {
            name: searchSkills
        }
    })
    res.render('mainstudent', {theOtherSkills, theStudent: req.session.user})
})
app.post("/updatestudentprofile", async function(req, res){
    const { newStudentUsername, newStudentFirst, newStudentLast, newStudentDOB, newStudentPurpose, newStudentBelt, newStudentYears, newStudentAbout } = req.body;
    let updateStudentProfile = await Student.update({
        username: newStudentUsername,
        first: newStudentFirst,
        last: newStudentLast,
        belt: newStudentBelt,
        years: newStudentYears,
        purpose: newStudentPurpose,
        about: newStudentAbout,
        dob: newStudentDOB
    }, {
        where: {
            id: req.session.user.id
        }
    })
    let studentInformation = await Student.findByPk(req.session.user.id)
    req.session.user = studentInformation
    res.redirect("/mainstudent");
})
app.post("/updateinstructorprofile", async function(req, res){
    const { newInstructorUsername, newInstructorFirst, newInstructorLast, newInstructorDOB, newInstructorBelt, newInstructorYears, newInstructorAbout } = req.body;
    let updateInstructorProfile = await Instructor.update({
        username: newInstructorUsername,
        first: newInstructorFirst,
        last: newInstructorLast,
        belt: newInstructorBelt,
        years: newInstructorYears,
        about: newInstructorAbout,
        dob: newInstructorDOB
    }, {
        where: {
            id: req.session.user.id
        }
    })
    let instructorInformation = await Instructor.findByPk(req.session.user.id)
    req.session.user = instructorInformation
    res.redirect("/maininstructor");
})
app.get("/", async function(req, res){
    res.render("home");
})
app.get("/login", async function(req, res){
    res.render("login");
})
app.get("/register", async function(req, res){
    res.render("register");
})
app.get("/login", async function(req, res){
    res.render("login");
})
app.get("/maininstructor", checkAuth, async function(req, res){
    res.render("maininstructor", { theInstructor: req.session.user });
})
app.get("/mainschool", checkAuth, async function(req, res){
    res.render("mainschool", { theSchool: req.session.user });
})
app.get("/mainstudent", checkAuth, async function(req, res){
    let theOtherSkills = await OtherSkill.findAll({
        where: {
            studentid: req.session.user.id
        }
    })
    res.render("mainstudent", { theOtherSkills, theStudent: req.session.user});
})
app.get("/logout", async function(req, res){
    req.session.destroy();
    res.redirect("/");
})
app.get('/error', function (req, res){
    res.render('error');
})
app.get('*', function(req, res){
    res.render('lost');
})