---
type: "project"
slug: "nomadically"
title: "Nomadically"
description: "React, AWS Amplify, Bootstrap"
github: http://www.github.com/matthewsecrist/nomadically
url: http://nomadically.s3-website-us-east-1.amazonaws.com/
preview: "./preview.png"
header: "./header.png"
---

Since I have been learning about AWS, I have looked for a project to make use of what I'm learning. Out of that, comes Nomadically. Nomadically is meant to be a job board for nomads, or people who are able to work remotely from anywhere they would like.

Built using AWS Amplify, the frontend is React, and the backend is serverless. It uses API Gateway, Lambda and DynamoDB to persist and retrieve data. Authentication is handled by Amazon Cognito, though the only time authentication is required is to post a job.

Features:

- Serverless using AWS Lambda and API Gateway
- Stores jobs in DynamoDB
- User authentication handled by AWS Cognito
- Styled with Styled-Components and Reactstrap
- Hosted on S3.
