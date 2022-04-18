const nodemailer = require('nodemailer');

const contactFunction = (req: any, res: any) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'mail.infomaniak.com',
    auth: {
      user: 'contact@fabiencarrichon.ch',
      pass: 'Qwertz.1',
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailData = {
    from: `${req.body.name} <contac@fabiencarrichon.ch>`,
    to: 'contact@fabiencarrichon.ch',
    subject: `Maison de beauté - ${req.body.subject}`,
    replyTo: req.body.email,
    text: req.body.message,
    html: `
      <div>
        <p>name: ${req.body.name}</p>
        <p>email: ${req.body.email}</p>
        <p>message: ${req.body.message}</p>
      </div>`,
  };
  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err) {
      res.json(err);
      res.status(500).end();
    } else {
      res.json(info);
      res.status(200).end();
    }
  });
};

export default contactFunction;
