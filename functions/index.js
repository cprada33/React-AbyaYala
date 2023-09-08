/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require('firebase-functions/v2/https');
 * const {onDocumentWritten} = require('firebase-functions/v2/firestore');
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {
  log,
  // info,
  // debug,
  // warn,
  error,
  // write,
} = require('firebase-functions/logger');
const { onCall } = require('firebase-functions/v2/https');
// const { onRequest } = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger');
const nodemailer = require('nodemailer');
// const functions = require('firebase-functions');
const fs = require('fs');
const { google } = require('googleapis');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// AUTOMATIZACION DE CORREOS
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const htmlTemplate = fs.readFileSync('emailTemplate.html', 'utf-8');

const sendEmail = (form) => {
  log('sendEmail');
  return transporter
    .sendMail(form)
    .then((r) => {
      log('enviado');
      console.log('Correo enviado:', r.accepted);
    })
    .catch((e) => {
      log('error en sendEmail');
      console.error('Error al enviar el correo:', e);
    });
};

exports.sendEmail = onCall((request) => {
  try {
    log(request.data);
    if (request.data.secret !== 'SendThisEmail') return 'Missing secret';

    const correoHtml = htmlTemplate
      .replace(
        /\${Nombre}/g,
        request.data.infoEmail.Nombre.toString().toUpperCase(),
      )
      .replace(/\${bookingRooms}/g, request.data.infoEmail.BookingRooms)
      .replace(/\${checkIn}/g, request.data.infoEmail.CheckInDate)
      .replace(/\${checkOut}/g, request.data.infoEmail.CheckOutDate)
      .replace(
        /\${tipoDeCabana}/g,
        request.data.infoEmail.TipoDeCabaña.toString().toUpperCase(),
      );

    // Datos del corre
    const mailOptions = {
      bcc: request.data.infoEmail.Correo,
      subject: request.data.infoEmail.subject,
      text: correoHtml,
      headers: {
        'Content-Type': 'text/html',
      },
    };

    return sendEmail(mailOptions);
  } catch (e) {
    log('catch', e);
    // throw new HttpsError('invalid-argument', 'The function must be called ' +
    //       'with one arguments \'text\' containing the message text to add.');
    return error(e);
  }
});

const serviceAccount = require('key.env');

// Autenticación utilizando la clave de la cuenta de servicio
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

// Crear un cliente de API de Google Calendar
const calendar = google.calendar({ version: 'v3', auth });

exports.sendCalendar = onCall((request) => {
  try {
    log('try');

    const RangeDates = request.data.infoEvent.RangeDates;
    for (const date of RangeDates) {
      // Detalles del evento
      const event = {
        summary: `${request.data.infoEvent.BookingRooms} ${request.data.infoEvent.TipoDeCabaña} ${request.data.infoEvent.Nombre}`,
        description: request.data.infoEvent.description,
        start: {
          date: date,
          timeZone: 'America/Bogota',
        },
        end: {
          date: date,
          timeZone: 'America/Bogota',
        },
      };

      // Crear el evento utilizando la cuenta de servicio
      calendar.events.insert(
        {
          calendarId:
            '52ea7246fbd18a9ae98f0fbc0bb905e001158af36ef25564ccfcc772a5dc08d7@group.calendar.google.com', // Cambia a la ID de calendario deseada
          resource: event,
        },
        (err, result) => {
          if (err) {
            console.error('Error al crear el evento:', err);
            return;
          }
          console.log('Evento creado:', result.data);
        },
      );
    }
  } catch (e) {
    log('catch', e);
    // throw new HttpsError('invalid-argument', 'The function must be called ' +
    //       'with one arguments \'text\' containing the message text to add.');
    return error(e);
  }
});
