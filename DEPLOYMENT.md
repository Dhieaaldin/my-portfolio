# Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. Follow these steps to set it up:

## 1. Configure GitHub Pages in Repository Settings

1.  Go to your repository on GitHub.
2.  Click on **Settings** (top right).
3.  In the left sidebar, click on **Pages**.
4.  Under **Build and deployment**, set the **Source** to **GitHub Actions**.

## 2. Push Your Changes

Once you push your changes to the `portfolio-v2` branch, the deployment process will start automatically.

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin portfolio-v2
```

## 3. Monitor Deployment

1.  Click on the **Actions** tab in your GitHub repository.
2.  You should see a workflow named "Deploy Next.js site to Pages" running.
3.  Once it finishes, your site will be live at `https://<your-username>.github.io/my-portfolio/`.

## Important Configuration Notes

- **next.config.ts**: The `basePath` and `assetPrefix` must match your repository name (currently set to `/my-portfolio`).
- **Images**: If you add new images to the `public` folder, ensure you use the relative path or prefix them with the base path if using the Next.js `Image` component.
- **Links**: When using the Next.js `Link` component, it will automatically handle the `basePath`.
