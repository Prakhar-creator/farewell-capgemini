import nodemailer from 'nodemailer'

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    }
  }

  try {
    const { name, message } = JSON.parse(event.body || '{}')

    if (!name || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Name and message are required.' })
      }
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD
    const toEmail = process.env.TO_EMAIL || gmailUser

    if (!gmailUser || !gmailPassword) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Email service is not configured.' })
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        // Google displays app passwords with spaces; SMTP expects them without
        pass: gmailPassword.replace(/\s+/g, '')
      }
    })

    const info = await transporter.sendMail({
      from: `"Farewell Site" <${gmailUser}>`,
      to: toEmail,
      subject: `New farewell message from ${String(name).slice(0, 100)}`,
      text: `From: ${name}\n\nMessage:\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: info.messageId })
    }
  } catch (error) {
    console.error('send-message failed', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send email.'
      })
    }
  }
}
