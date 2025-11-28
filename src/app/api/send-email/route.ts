import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, userType, packageName, subject } = body;

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    const smtpHost = process.env.MAILGUN_SMTP_HOST || 'smtp.mailgun.org';
    const smtpPort = parseInt(process.env.MAILGUN_SMTP_PORT || '587');
    const smtpUser = process.env.MAILGUN_SMTP_USER;
    const smtpPass = process.env.MAILGUN_SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error('Missing SMTP credentials:', {
        hasUser: !!smtpUser,
        hasPass: !!smtpPass,
      });
      return NextResponse.json(
        { error: 'Email service not configured. Please check environment variables.' },
        { status: 500 }
      );
    }

    // Log credentials format (without showing actual password)
    console.log('SMTP Configuration:', {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      passwordLength: smtpPass?.length || 0,
      fromEmail: process.env.MAILGUN_FROM_EMAIL,
    });

    // Create transporter with Mailgun SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      requireTLS: smtpPort === 587, // Require TLS for port 587
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false, // Allow self-signed certificates for localhost
      },
      debug: true, // Enable debug mode
      logger: true, // Enable logging
    });

    // Email content
    // For Mailgun sandbox accounts, recipient must be authorized
    // Use the authorized recipient email or add recipients in Mailgun dashboard
    const toEmail = process.env.MAILGUN_TO_EMAIL || process.env.MAILGUN_SMTP_USER || 'info@smartxstay.com';
    
    const mailOptions = {
      from: process.env.MAILGUN_FROM_EMAIL || 'info@sandboxd31f1552a25749e5b75b8be0c80c0a8f.mailgun.org',
      to: toEmail,
      subject: subject || `New Contact Form Submission from ${name || 'Website'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${userType ? `<p><strong>User Type:</strong> ${userType}</p>` : ''}
          ${packageName ? `<p><strong>Package:</strong> ${packageName}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">This email was sent from the SmartxStay website contact form.</p>
        </div>
      `,
      text: `
New Contact Form Submission

${name ? `Name: ${name}` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${userType ? `User Type: ${userType}` : ''}
${packageName ? `Package: ${packageName}` : ''}

Message:
${message}

---
This email was sent from the SmartxStay website contact form.
      `,
    };

    // Verify connection before sending (skip on localhost if needed)
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError: unknown) {
      const error = verifyError as { message?: string; code?: string; command?: string };
      console.error('SMTP verification failed:', {
        message: error.message,
        code: error.code,
        command: error.command,
      });
      // Continue anyway - sometimes verification fails but sending works
      console.warn('Continuing with email send despite verification failure...');
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string; command?: string; response?: string };
    console.error('Error sending email:', {
      message: err.message,
      code: err.code,
      command: err.command,
      response: err.response,
    });

    // Check if it's a Mailgun sandbox authorization error
    const isSandboxError = err.response?.includes('not allowed to send') || 
                          err.message?.includes('not allowed to send') ||
                          err.message?.includes('Free accounts are for test purposes');

    if (isSandboxError) {
      return NextResponse.json(
        { 
          error: 'Mailgun Sandbox Limitation', 
          details: 'The recipient email address must be authorized in your Mailgun dashboard. Free sandbox accounts can only send to authorized recipients. Please add the recipient email in Mailgun dashboard under "Authorized Recipients" or upgrade your Mailgun account.',
          code: err.code,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: err.message || 'Unknown error',
        code: err.code,
      },
      { status: 500 }
    );
  }
}

