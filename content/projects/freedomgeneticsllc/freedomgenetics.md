---
type: "project"
slug: "freedom-genetics-llc"
title: "Freedom Genetics LLC"
description: "React, Boostrap, AWS Lambda"
github: https://github.com/freedomgenetics/freedomgeneticsllc
url: http://www.freedomgeneticsllc.com/
preview: "./preview.png"
header: "./header.png"
---

Freedom Genetics is a company owned by my Father and I have been doing their web development and IT related work. Previously, I had set up a Wordpress site, but it ended up that was complete overkill for what was needed. I settled on going with AWS in order to provide hosting and functionality because it would fall under the free tier.

The site itself runs on React with Bootstrap for styling. Upon submitting the contact form, the React app calls out to API Gateway, which triggers a Lambda function.

The Lambda function is written in Python. The function takes the event, puts it in a Dynamo DB table and then sends out an email using Simple Email Service to the company's contact email.

Features:

- Users can submit a contact form.
- Contact form data gets saved to a database and emailed.
- Serverless architecture.
