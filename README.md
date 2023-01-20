# MLH HACKATHON

> Solving the problems of problem-solvers

---

## The Problem

EMS providers rely on information about their patients in order to develop and implement care

It is not uncommon though, for these professionals to face situations where the patient is unable to communicate, in which case, they need to look around for clues that could indicate patient's health status

## The Solution

E-chart resolves this problem. The patient signs up to the platform and creates a profile, which they will add, after HIPAA disclaimers, basic information required in every Patient Chart.

The patient then receives a QR Code and a wallet card with this QR Code printed.

In case of emergencies, EMS professionals can simply scan that card and have access to information such as allergies, medications, and past medical history, decreasing On-Scene time, and increasing the rate at which appropriate care is rendered.

---

## The Project

- Full stack application built with the MERN technology
  - Server: NodeJS, Express.js
  - Client: ReactJS
  - DB: MongoDB- Mongoose Applied

## SERVER

- REST API
- Security Measures:
  - Secure HTTP Headers
  - Rate limit agains Brute Force attacks
  - Data sanitization against NOSQL query injection
  - Params/Query polution prevention
  - Encryption and Cookies secure httpOnly
- Email campaign:
  - Nodemailer and Sendgrid to manage communication with users

## RUNNING IT

- Fork/Clone this project
- `.env` example:

```
NODE_ENV=development or production
DB_URI=YourURI
GRID_USERNAME=sendgridusername
GRID_PASSWORD=sendgridpassword
EMAIL: some@email.com
SECRET_TOKEN=anystringofyourchoice
```

- Run `npm install` at the root to install server dependencies
- `cd client` && `npm install` to install client dependencies
- At the root, `npm run dev` to start the API
- `npm run client` to start the client
- Seed DB with `npm run seedDB`
- Clear DB with `npm run clearDB`
