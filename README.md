# Typescript Challenge

## Quick Demo

<details>
<summary>Happy scenario GIF</summary>

![](/data/Oct-08-2023%2017-00-24.gif)

</details>

<details>
<summary>Invalid path GIF</summary>

![](/data/Oct-08-2023%2017-03-15.gif)

</details>

<details>
<summary>MongoDB CUSTOMERS collection snapshot</summary>

![](/data/Screenshot%202023-10-08%20at%205.10.18%20pm.png)

</details>

<details>
<summary>MongoDB ORDERS collection snapshot</summary>

![](/data/Screenshot%202023-10-08%20at%205.10.18%20pm.png)

</details>

## How to run

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## TypeScript Challenge Instructions

<details>
<summary>Instructions</summary>

Write a Node project that:

1.  reads in the file `data.json` transforms it into a format that matches `example-output.json`
2.  load transformed data into a datastore - store can be of your choice, in memory or a local database
3.  Create an API that has 2 get API calls. One for customers and one for orders that pull data from the datastore
4.  Create a simple UI that calls the API and displays the customer and the customers orders

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

1.  Fork this project on github.
2.  Update this README.md file with instructions on how to build/test/run your script.
3.  When you're finished, send us the URL of your public repository.
</details>
