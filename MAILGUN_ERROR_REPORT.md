# Mailgun Error Report

## Problem Description

I'm experiencing an issue with sending emails through Mailgun SMTP using a sandbox account. The SMTP connection and authentication are successful, but email sending fails with a 421 error.

## Error Details

**Error Message:**
```
421 Domain sandboxd31f1552a25749e5b75b8be0c80c0a8f.mailgun.org is not allowed to send: Free accounts are for test purposes only. Please upgrade or add the address to your authorized recipients.
```

**Error Code:** `EENVELOPE`

**SMTP Response:** `421 Domain sandboxd31f1552a25749e5b75b8be0c80c0a8f.mailgun.org is not allowed to send: Free accounts are for test purposes only. Please upgrade or add the address to your authorized recipients.`

## Technical Details

**SMTP Configuration:**
- Host: `smtp.mailgun.org`
- Port: `587`
- Authentication: Successful (235 Authentication successful)
- TLS: Enabled and working
- From Address: `info@sandboxd31f1552a25749e5b75b8be0c80c0a8f.mailgun.org`
- To Address: `info@smartxstay.com`

**SMTP Log Sequence:**
1. Connection established successfully
2. STARTTLS handshake completed
3. Authentication successful (235)
4. MAIL FROM accepted (250)
5. RCPT TO accepted (250)
6. DATA command fails with 421 error

## What I've Tried

1. Verified SMTP credentials are correct
2. Confirmed authentication is working
3. Checked that recipient address is valid
4. Verified TLS/SSL configuration

## Questions

1. Is `info@smartxstay.com` already added to authorized recipients? If not, how do I add it?
2. Are there any limitations on the number of authorized recipients for sandbox accounts?
3. Is there a way to send to any email address with the sandbox account, or do I need to upgrade?
4. What is the process to authorize a recipient email address?

## Account Information

- Domain: `sandboxd31f1552a25749e5b75b8be0c80c0a8f.mailgun.org`
- Account Type: Free/Sandbox
- SMTP User: `info@sandboxd31f1552a25749e5b75b8be0c80c0a8f.mailgun.org`

## Request

I need to be able to send emails to `info@smartxstay.com` from my contact forms. Please help me either:
1. Add this recipient to authorized recipients, or
2. Guide me through the process to authorize recipients, or
3. Explain if I need to upgrade my account to send to any email address

Thank you for your assistance.


