This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy with GitHub Actions and Docker

Pushes to `main` or `master` run `.github/workflows/deploy.yml`. The workflow installs dependencies, runs lint/build checks, builds a `linux/amd64` Docker image, pushes it to GitHub Container Registry, then deploys it to `/opt/lxd` on your server over SSH.

Add these GitHub repository secrets before the first deployment:

- `SERVER_HOST`: server IP address or hostname.
- `SERVER_USER`: SSH user.
- `SERVER_SSH_KEY`: private SSH key for that user.
- `SERVER_PORT`: SSH port, usually `22`.
- `GHCR_USERNAME`: GitHub username used by the server to pull packages.
- `GHCR_TOKEN`: GitHub token with at least `read:packages`.

The server needs Docker, the Docker Compose plugin, and Nginx. The deployed container binds to `127.0.0.1:3000`, so point Nginx at that address. See `deploy/nginx.example.conf` for a starter server block.

Rollback is done by editing `/opt/lxd/.env` on the server and changing `APP_IMAGE` to a previous commit SHA image tag, then running:

```bash
cd /opt/lxd
sudo docker compose --env-file .env -f docker-compose.yml up -d
```
