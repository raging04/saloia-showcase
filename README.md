<div align="center">
  <img alt="Taberna Saloia Logo" src="public/Logo_TabernaSaloia.svg" width="200" />
  <h1>Taberna Saloia Website</h1>
  <p>Official website for <strong>Taberna Saloia</strong></p>

  <p>
    <a href="https://tabernasaloia.com" target="_blank">
            <img src="https://img.shields.io/badge/Website-tabernasaloia.com-blue?style=for-the-badge&logo=googlechrome" alt="Website Link" /> </a>

  </p>
</div>

---

## About the Project

A pet project for the Taberna Saloia restaurant, based in Loures, Portugal. Built to provide a fast, appealing, and responsive experience for users, utilizing a modern ecosystem based on **React** and **Vite**. A large part of the code was AI-generated, using **Google Gemini** and **Claude** models models to improve a **Lovable.ai** generated template.

## Tech Stack

- **[React](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** - Application core
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Shadcn UI](https://ui.shadcn.com/)** & **[Radix UI](https://www.radix-ui.com/)** - UI Components
- **[React Router](https://reactrouter.com/)** - Routing

## How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/raging04/saloia-showcase/
   cd saloia-showcase
   ```

2. **Install dependencies**
   Using `npm`, `yarn`, or `bun` is recommended:

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Image optimization

Photos in `public/` can be downscaled/re-encoded with a dependency-free script
(macOS `sips`):

```bash
npm run optimize:images
```

Videos are already re-encoded to web-optimized H.264. To redo them you need
`ffmpeg`, e.g.:

```bash
ffmpeg -i input.mov -an -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 28 -movflags +faststart output.mov
```

## Deployment (AWS Amplify)

The site is hosted on **AWS Amplify**, which builds automatically on push using
[`amplify.yml`](./amplify.yml). Two things are configured outside the build:

- **Custom HTTP headers** (cache + security headers + CSP) live in
  [`customHttp.yml`](./customHttp.yml) and are applied by Amplify automatically.
- **SPA rewrite** — Amplify rewrites are set in the **console** (App settings →
  Rewrites and redirects), not in a repo file. Add a single rule so deep links
  like `/ementa` survive a hard refresh:

  | Source address | Target address | Type |
  | --- | --- | --- |
  | `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|jpeg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json\|webp\|mp4\|mov\|pdf)$)([^.]+$)/>` | `/index.html` | `200 (Rewrite)` |

## License

The source code for this project is licensed under the **MIT License**. However, all **visual assets, photographs, images, and logos** located in the `public/` directory (or others) are protected by **copyright** and may not be used, copied, or distributed without express permission.

For more details, check the [LICENSE](./LICENSE) file.
