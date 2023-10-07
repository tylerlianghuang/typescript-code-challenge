# TypeScript Challenge Instructions

Write a Node project that:
 1. reads in the file `data.json` transforms it into a format that matches `example-output.json`
 2. load transformed data into a datastore - store can be of your choice, in memory or a local database
 3. Create an API that has 2 get API calls. One for customers and one for orders that pull data from the datastore
 4. Create a simple UI that calls the API and displays the customer and the customers orders

## General Approach and Assumptions

- Solution should be implemetned in TypeScript.
- Read JSON `data.json` async from it's directory, convert data async, write into datastore async
- Solution should be run from the command line using `npm run`.
- Solution should be non-blocking.
- Solution should use React or modern equivilent for UI
- Solution APIs should be REST compliant

## Criteria

Your work will be evaluated primarily on:

- Consistency of coding style.
- Correct use of promises, including proper error handling.
- Correct use of TypeScript, including interface/object definitions.
- Absence of "callback hell".
- Correct and complete unit test coverage.
- General quality of code and technical communication.

## How to submit your work

 1. Fork this project on github.
 2. Update this README.md file with instructions on how to build/test/run your script.
 3. When you're finished, send us the URL of your public repository.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
