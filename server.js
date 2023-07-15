const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.static('./'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jaysonfoyo1999@gmail.com',
            pass: 'mklceconlfqyvjxx'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: `jaysonfoyo0@gmail.com, ${req.body.email}`,
        subject: `Message from (${req.body.name}) Using Porfolio contact form`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nCompany: ${req.body.company}\nMessage: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})