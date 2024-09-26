---
date: 2023-03-14 12:00:00 +0100
slug: mistral
title: "Mistral Client"
tech: ["React Native", "Expo", "iOS"]
icon: "/images/work/show/mistral-icon.png"
index: 0

---

# Mistral Client for iOS

I wanted to use the French Mistral AI model on my phone, but there was no mobile app available. So, I decided to build my own iOS client using React Native and Expo. This project allowed me to create a custom interface for interacting with the Mistral AI model on my mobile device. To handle the backend operations securely, I implemented a Node.js server, ensuring a robust and efficient communication between the app and the AI model.

## Features

- Custom UI for Mistral AI interactions
- iOS compatibility
- Built with React Native and Expo for rapid development


## Technical Details

This project was built using React Native and Expo, allowing for quick development and easy deployment to iOS. The app interfaces with the Mistral AI API to provide a seamless experience for users who want to interact with the AI model on their mobile devices.

## Security
To ensure the security of the Mistral AI API key, I implemented a server-side proxy using Node.js and Express, deployed on Render.com. This approach prevents exposing the API key in the client-side code. The proxy server handles all API calls to Mistral AI, securely storing the API key as an environment variable. I used HMAC for request authentication between the iOS app and the proxy server, ensuring that only authorized requests are processed. This security approach effectively protects the API key while allowing secure interactions with Mistral AI.


<img
  src="/images/work/show/mistral1.jpg"
  alt="Mistral Client Screenshot 1"
  title="Mistral Client Screenshot 1"
  style="display: inline-block; width: 250px"
/>

<img
  src="/images/work/show/mistral2.jpg"
  alt="Mistral Client Screenshot 2"
  title="Mistral Client Screenshot 2"
  style="display: inline-block; width: 250px"
/>