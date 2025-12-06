# Fashion-and-Lifestyle-Society-Website

A Next.js website for the Fashion and Lifestyle Society, built with TypeScript and Tailwind CSS.

## 🚀 Vercel Deployment

This project is deployed on Vercel and automatically builds from the repository.

### Current Deployment Status

- **Project Name**: `fls-website`
- **Production URL**: https://fls-website-gj4nk2036-it-managers-projects-bc1bb3df.vercel.app
- **Project Dashboard**: https://vercel.com/it-managers-projects-bc1bb3df/fls-website/settings
- **Status**: ✅ Deployed successfully
- **GitHub Integration**: ⚠️ Not connected (see troubleshooting below)

### Deployment Configuration

- **Framework**: Next.js 14
- **Build Command**: `next build`
- **Output Directory**: Next.js default (`.next`)
- **Install Command**: `npm install`
- **Root Directory**: `./` (project root)

### How to Deploy Updates

#### Method 1: Manual Deployment via CLI (Current Method)

Since GitHub integration is not yet connected, you can deploy manually:

```bash
# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

#### Method 2: Automatic Deployment via GitHub (Recommended - Once Connected)

Once GitHub is connected, simply push to your repository:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically detect the push and deploy a new version.

### Connecting GitHub Repository

The GitHub repository connection failed during initial setup. To enable automatic deployments:

1. **Via Vercel Dashboard** (Recommended):
   - Go to: https://vercel.com/it-managers-projects-bc1bb3df/fls-website/settings
   - Click on **"Git"** in the settings menu
   - Click **"Connect Git Repository"**
   - Select your GitHub account and repository: `alam389/Fashion-and-Lifestyle-Society-Website`
   - Ensure Vercel has access to your GitHub repositories

2. **Check GitHub Permissions**:
   - Go to GitHub → Settings → Applications → Authorized OAuth Apps
   - Find "Vercel" and ensure it has access to your repositories
   - If needed, re-authorize Vercel with repository access

### Common Vercel CLI Commands

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy to preview
vercel

# View deployment logs
vercel inspect <deployment-url> --logs

# Redeploy a specific deployment
vercel redeploy <deployment-url>

# View project information
vercel ls
```

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (test locally)
npm run build

# Start production server locally
npm start

# Run linter
npm run lint
```

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── behind-the-scenes/  # Behind the scenes page
│   ├── meet-the-team/      # Meet the team page
│   ├── show/               # Show page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   └── Navigation.tsx      # Navigation component
├── public/                 # Static assets
│   └── images/             # Image assets
└── ...config files         # Configuration files
```

### Environment Variables

If you need to add environment variables:

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add your variables for Production, Preview, and Development environments
3. Redeploy for changes to take effect

### Troubleshooting

#### Build Failures
- Check build logs in Vercel Dashboard
- Test build locally: `npm run build`
- Ensure all dependencies are in `package.json`

#### GitHub Connection Issues
- Verify repository name: `alam389/Fashion-and-Lifestyle-Society-Website`
- Check GitHub OAuth permissions for Vercel
- Try connecting via Vercel Dashboard instead of CLI

#### Deployment Not Updating
- If using CLI: Run `vercel --prod` after changes
- If GitHub connected: Ensure you've pushed to the main branch
- Check deployment logs in Vercel Dashboard

### Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project Settings](https://vercel.com/it-managers-projects-bc1bb3df/fls-website/settings)