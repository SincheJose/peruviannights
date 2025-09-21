Peruvian Nights — Static Site (GoDaddy upload)
=================================================

What this is
------------
A simple, upload-ready static site you can host on any provider. No WordPress, no frameworks.
Files:
- index.html
- styles.css
- script.js
- /assets (images, favicon placeholders)

Quick launch on GoDaddy (cPanel/Linux hosting)
----------------------------------------------
1) Buy a basic Linux hosting plan.
2) In GoDaddy › My Products › Web Hosting, click **Set up** and attach your domain.
3) Open **cPanel** › **File Manager** › go to **public_html**.
4) Click **Upload**, and upload the zip OR the four files.
5) If you uploaded the zip, select it and **Extract** into public_html.
6) Ensure your landing file is named **index.html** (it is).
7) Visit https://yourdomain.com to test.

DNS & SSL
---------
- If DNS isn’t pointed automatically, set your domain’s **A record** to your hosting account’s IP (shown in cPanel).
- In cPanel, enable **SSL/TLS** or **AutoSSL** (Let’s Encrypt). Many plans do this automatically within a few minutes.

Email/Forms on a static site
----------------------------
- The “Book” button uses a mailto link by default.
- If you want a web form, use an embed (HubSpot, Tally, Formspree). Replace the booking section with the provider’s embed code.
- For HubSpot, paste their script and formId in index.html where noted.

Customize
---------
- Replace assets/hero.jpg, assets/og-image.jpg, and assets/favicon.png with your own files.
- Update colors in styles.css (CSS variables at the top).
- Change pricing, service area, or copy in index.html.

Enjoy the minimalism. Ship it.
