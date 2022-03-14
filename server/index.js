require('dotenv').config()
const path = require("path");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const PORT = process.env.PORT || 3001;
console.log(process.env.REFRESH_TOKEN)
const app = express();
app.use(cors());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  return transporter;
};

const verifyEmail = async () => {
  let emailTransporter = await createTransporter();
  await emailTransporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  })
};

const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions, (error) => {
    if (error){
      console.log("error sending email");
    }
    else {
      console.log("email sent!");
    }
  });
};

// sendEmail({
//   subject: "Test",
//   text: "I am sending an email from nodemailer!",
//   to: "rory.james2021@gmail.com",
//   from: process.env.EMAIL
// });

app.use(express.json());

app.post('*', (req, res) => {
  
  console.log(req.body);
  name = req.body.name;
  email = req.body.email;
  message = req.body.message;

  sendEmail({
    subject: "Contact Form Submission",
    text: `Name: ${name}
           Email: ${email}
           Message: ${message}`,
    to: process.env.EMAIL,
    from: process.env.EMAIL
  })
})

// test get 
app.get("/help", (req, res) => {
  res.Send("here you go!");
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const server = app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));



