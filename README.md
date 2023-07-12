## Deploy with Vercel

Click the deploy button below to directly deploy this repository with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fepiserver%2Fvercel-contentgraph-template&env=CG_SINGLE_KEY,CG_APP_KEY,CG_SECRET,CG_WEBHOOK_SECRET,CMS_URL)

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployment Variables

When deploying to Vercel add the environment variables listed below, if you use the "Deploy with vercel" button the
names of the variables are pre-populated for you.

| Variable          | Description                                                                         | Default Value                        |
|-------------------|-------------------------------------------------------------------------------------|--------------------------------------|
| CG_ENDPOINT       | Content Graph Endpoint to use                                                       | https://cg.optimizely.com/content/v2 |
| CG_SINGLE_KEY     | Single Key from Content Graph                                                       |                                      |
| CG_APP_KEY        | App Key from ContentGraph                                                           |                                      |
| CG_SECRET         | App Secret from ContentGraph                                                        |                                      |
| CG_WEBHOOK_SECRET | The secret used when registering the webhook with Content Graph                     |                                      |
| CMS_URL           | The url of your CMS that will be used when using visual-editing on a preview branch |                                      |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.ts`.

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
