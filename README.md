# Scrimmage Rewards Program Integration for Website using iframe

This README provides step-by-step instructions on how to integrate
the Scrimmage Rewards program into your website using an iframe.

## Prerequisites

Before integrating the Scrimmage Rewards program into your website,
ensure that you have the following prerequisites in place:

- Access to the Scrimmage Rewards program and an active account.

## Integration Steps

Follow the steps below to integrate the Scrimmage Rewards program into your website using an iframe:

1. **Obtain the Scrimmage Rewards program URL**

   Get the URL of the Scrimmage Rewards program that you want to embed in your website.
   This URL will be used as the source for the iframe.

2. **Add an iframe to your HTML page**

   In your HTML page, add an iframe element at the location where you want
   the Scrimmage Rewards program to appear. Better to add as linked view for
   fab button in the bottom right corner.

   Customize the width and height attributes based on your desired dimensions for the iframe.
   We use box at least 360px wide and 640px tall. For mobile,
   you can use calculated width and height to make it responsive.
   ```css
   .widget {
     width: min(380px, 98vw);
     height: min(640px, 100vh - 100px);
   }
   ```

3. **Customize the iframe appearance (optional)**

   You can further customize the appearance of the iframe by applying CSS styles.
   Check out the [styles.css](styles.css) file for an example of how to customize the iframe.

4. **Add token retrieving logic**

   You have to retrieve the token from your backend and pass it to the iframe as a query parameter.
   ```js
   const token = await fetch('/api/token').then(res => res.text());
   const iframe = document.getElementById('scrimmage-iframe');
   iframe.src = `https://partnerid.apps.scrimmage.co.co/?token=${token}`;
   ```
