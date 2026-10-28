export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    }
  }

  try {
    const { name, message, to } = JSON.parse(event.body || '{}')

    if (!name || !message || !to) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Name, message, and recipient are required.' })
      }
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL

    if (!apiKey || !fromEmail) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Email service is not configured.' })
      }
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject: `New farewell message from ${name}`,
        reply_to: to,
        html: `
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `
      })
    })

    const resendData = await resendResponse.json()

    if (!resendResponse.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: resendData?.message || 'Failed to send email via Resend.'
        })
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: resendData })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message || 'Unexpected server error.'
      })
    }
  }
}
