import nodemailer from 'nodemailer'

export const sendEmail = async (param, ctx) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'q7jqevn5ac4x3hea@ethereal.email',
      pass: 'fVv5tGg7cuMgZd6Gbb'
    }
  })

  const mailOptions = {
    from: 'q7jqevn5ac4x3hea@ethereal.email', // sender address
    to: 'mf.costa@live.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>' // plain text body
  }

  await transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err, info)
    else console.log(info)
  })

  return { status: 'hello World' }
}
