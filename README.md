<p align="center">
  <a href="https://bjj-stars.onrender.com)" rel="" target="_blank"><img width="150" src="./public/images/star.jpg" alt="BJJ Stars"></a></p>
</p>

<h1 align="center">BJJ Stars</h1>
<h2 align="center">For the Brazilian Jiu-Jitsu Enthusiast</h2>

> Build Status:
Deployed@**[BJJ Stars](https://bjj-stars.onrender.com)**

## What is BJJ Stars?
Bjj Stars is designed for the Brazilian Jiu-Jitsu Practitioner. Whether you are a just begininng your Jiu-Jitsu journey, or have been studying for years, BJJ Stars is here to help.

At it's core, BJJ Stars records any new skills you obtain. You can then reference the skills at a later date to refresh your memory.

You can register as a Student, Instructor or School.

## Inspiration
<p align="center">
<img width="250" src="./public/images/bjj15.jpeg" alt="Betty Lee at Worlds">
</p>

I have practiced Brazilian Jiu-Jitsu for over ten years. And as a practitioner I recognized that there was not a standard way of tracking my skills, or for my instructors to track my skills. 

Once I became a programmer, I was able to fufill a genuine need within a niche community.

## Quick Preview

<img src="https://media.giphy.com/media/gQbcBI4aEC285TOOJl/giphy.gif" alt="View of Website"/>

## Features
- Bcrypt Encoding
- User Log-in, Sign-up and Log-out
- Add, Edit and Delete Skills
- Edit Profile Information

## Technical Framework Usage:
- PostgresSQL
- Express
- Embdedded Java Script
- Node.js
- Sequelize

## Code Framework Style
- Bootstrap
- Custom Styled Components

## Data References
Custom Secured Data Usage

## Usage
Sign-In or Sign-Up

  <h4>Components for each setup:</h4>

        Home Landing     | Student Page           | Instructor page     | School Page
       --------------------------------------------------------------------------------
        Sign-In Button   | Edit Profile Modal     | Profile Preview     | Profile Preview
        Sign-Up Button   | Add Skill Modal        | Edit Profile Modal  | Edit Profile Modal
        Carousel         | Edit Skill Modal       | Log Out Button      | Log Out Button
        About BJJ Stars  | Preview All Skills     |                     |
                         | Search Skills          |                     |
                         | Star Tracker +1 when a |                     |
                         | new skill is added     |                     |
                         | Profile Preview        |                     |
                         | Log Out Button         |                     |

## Current Goals

- [x] Update database from local to cloud based
- [x] Host the site on Render
- [ ] Fine tune the Instructor's side
- [ ] Fine tune the School's side
- [ ] Debug a glitch in the student's skills table
- [ ] Connect Existing Student, Instructor and School Foreign Keys

## Challenges
- Time managing with less than two(2) weeks to complete. 
- Connecting **six** databses with their congruent foreign keys.
- Learning bcrypt
- Learning Bootstrap
- Learning how to use cookies

## Triumphs
- Created site with 3-months of traning from Digital Crafts BootCamp
- Built the back end with my stretch goals in mind so I can continue to add functionalities. 

## Code Example Extraction

Adding a skill from the EJS side
```
            <div class="modal-body">
              <form action="/addskillstudent" method="post">
                <label for="category" class="form-label">Category</label>
                <input
                  type="text"
                  name="skillCategory"
                  class="form-control"
                  id="category"
                  placeholder="Mount, De La Riva, Closed Guard..."
                />
                
                //etc...

```
Adding a skill from the Server side
```
app.post("/addskillstudent", async function (req, res) {
  const {
    skillCategory,
    skillName,
    skillComment,
    skillYoutube,
    skillLearnedFrom,
  } = req.body;
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
    updatedAt: new Date(),
  });
  let studentStar = await Student.update(
    {
      stars: req.session.user.stars + 1,
    },
    {
      where: {
        id: req.session.user.id,
      },
    }
  );
  req.session.user.stars = req.session.user.stars + 1;
  res.redirect("/mainstudent");
});
```
Accreditation:
- Full-Stack Developer:[Betty Lee Carter](https://github.com/deliflows) Ideation, Front-End, Back-End, Deployment, ReadMe-files.

## The End.
