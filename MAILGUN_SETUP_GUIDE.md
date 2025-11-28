# Mailgun Setup Guide - Preverjanje nastavitev

## Problem: 535 Authentication failed

Če dobivaš napako "535 Authentication failed", moraš preveriti naslednje v Mailgun dashboardu:

## Korak 1: Preveri, katera domena je aktivna

1. Pojdi na https://app.mailgun.com/
2. Odpri **Sending** → **Domains**
3. Preveri, katera domena je **Active** (zelena ikona)
4. Preveri ime domene (ali je `info.smartxstay.com` ali drugo)

## Korak 2: Preveri SMTP credentials

1. Klikni na aktivno domeno
2. Pojdi na zavihek **Domain Settings** ali **SMTP credentials**
3. Tam najdeš:
   - **SMTP hostname**: `smtp.mailgun.org` (ali drugo)
   - **SMTP port**: `587` ali `465`
   - **SMTP username**: To mora biti točno tisto, kar vidiš tam
     - Morda je `postmaster@info.smartxstay.com`
     - Morda je samo `info@info.smartxstay.com`
     - Morda je `info.smartxstay.com`
   - **SMTP password**: To mora biti API key ali SMTP password

## Korak 3: Preveri API keys (če SMTP ne deluje)

1. Pojdi na **Sending** → **Domain Settings**
2. Odpri **API keys** ali **SMTP credentials**
3. Preveri, ali je API key pravilen
4. Morda moraš generirati nov SMTP password

## Korak 4: Preveri DNS nastavitve

1. V **Domain Settings** preveri **DNS Records**
2. Preveri, ali so vsi DNS zapisi pravilno nastavljeni
3. Domain mora biti **verified** (zelena ikona)

## Korak 5: Test SMTP credentials

Ko dobiš prave credentials iz Mailgun dashboarda, jih dodaj v `.env.local`:

```
MAILGUN_SMTP_HOST=smtp.mailgun.org
MAILGUN_SMTP_PORT=587
MAILGUN_SMTP_USER=<TOČNO TO, KAR VIDIŠ V MAILGUN DASHBOARDU>
MAILGUN_SMTP_PASS=<TOČNO TO, KAR VIDIŠ V MAILGUN DASHBOARDU>
MAILGUN_FROM_EMAIL=<email, s katerega želiš pošiljati>
MAILGUN_TO_EMAIL=info@smartxstay.com
```

## Najpogostejše napake:

1. **Napačen SMTP username**: Mora biti točno tisto, kar je v Mailgun dashboardu
2. **Napačen password**: API key ali SMTP password mora biti pravilen
3. **Domena ni verificirana**: Domain mora biti aktivna in verificirana
4. **Napačen port**: Poskusi tudi port 465 z `secure: true`

## Kaj narediti zdaj:

1. Odpri Mailgun dashboard
2. Pojdi na **Sending** → **Domains**
3. Klikni na svojo domeno
4. Pojdi na **Domain Settings** ali **SMTP**
5. Kopiraj **točno** to, kar vidiš:
   - SMTP username
   - SMTP password
6. Posodobi `.env.local` z novimi podatki
7. Restartaj Next.js server

## Pomembno:

- SMTP username je lahko različen od email naslova
- Password je lahko API key, ne email password
- Domena mora biti verificirana in aktivna


