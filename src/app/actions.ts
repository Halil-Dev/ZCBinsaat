'use server';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error('GOOGLE_SHEETS_WEBHOOK_URL environment variable is missing.');
    return { success: false, error: 'Configuration error: Webhook URL is missing.' };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      }),
      // Apps Script web apps usually redirect with a 302/307, next fetch handles this automatically.
      redirect: 'follow'
    });

    // Google Apps Script usually returns 200 even on some errors, but we check if the response is ok.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message || 'Failed to submit form.' };
  }
}
