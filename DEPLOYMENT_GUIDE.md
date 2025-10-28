# 🚀 GRS Parbhani: Deployment & CI/CD Guide

This guide covers the one-time setup for deploying the `parbhani` site to Vercel and the ongoing process for making continuous updates.

## Part 1: One-Time Vercel Setup

1.  **Sign Up/Login to Vercel:**
    * Go to [vercel.com](https://vercel.com/) and sign in using your GitHub account.

2.  **Import Your Project:**
    * From your Vercel dashboard, click "**Add New...**" -> "**Project**".
    * Find your `samajkalyanin/parbhani` repository and click "**Import**".

3.  **Configure Project:**
    * Vercel will automatically detect this is a **Vite** project. The default settings are correct:
        * **Framework Preset:** `Vite`
        * **Build Command:** `npm run build`
        * **Output Directory:** `dist`
        * **Install Command:** `npm install`

4.  **Add Environment Variables (CRITICAL):**
    * This is the most important step for making the forms work.
    * In the project settings, go to "**Environment Variables**".
    * Add the following variables. These are your *secrets* from EmailJS and your WhatsApp number.

    | Name | Value |
    | :--- | :--- |
    | `VITE_EMAILJS_SERVICE_ID` | `your_service_id_from_emailjs` |
    | `VITE_EMAILJS_TEMPLATE_ID` | `your_template_id_from_emailjs` |
    | `VITE_EMAILJS_USER_ID` | `your_public_key_from_emailjs` |
    | `VITE_WHATSAPP_NUMBER` | `919860151400` (or your target number) |

    **Note:** The `VITE_` prefix is required for Vite to expose these variables to the website.

5.  **Deploy:**
    * Click the "**Deploy**" button.
    * Vercel will build your site and give you a live URL (e.g., `parbhani.vercel.app`).
    * You can add your custom domain (`parbhani.samajkalyan.info`) in the "**Domains**" tab of the project settings.

## Part 2: The Continuous Update Workflow (CI/CD)

Now that Vercel is connected, updating your live site is simple. **You never need to log into Vercel again to deploy.**

1.  **Make Changes Locally:**
    * Edit your code in VS Code (e.g., change text, add a blog post, fix a bug).

2.  **Save and Commit:**
    * Open your terminal in VS Code.
    * `git add .` (to stage all your changes)
    * `git commit -m "Your update message"` (e.g., "Updated contact page text")

3.  **Push to GitHub:**
    * `git push origin main` (or your primary branch)

**That's it!**

* Vercel will **automatically** detect the `push`.
* It will instantly start a new build with your latest changes.
* Within 1-2 minutes, your live website will be updated.

## Part 3: Custom Domain Setup

1.  **Go to Project Settings** in Vercel
2.  **Click "Domains"** tab
3.  **Add your domain:** `parbhani.samajkalyan.info`
4.  **Update DNS records** at your domain registrar:
    * Add CNAME record pointing to `cname.vercel-dns.com`
    * Or follow Vercel's specific instructions for your domain

## Part 4: Environment Variables Reference

### How to Update Environment Variables

1.  Go to your project in Vercel
2.  Click "**Settings**" → "**Environment Variables**"
3.  Edit or add new variables
4.  **Redeploy** the site for changes to take effect

### Required Variables

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_USER_ID=user_xxxxxxx
VITE_WHATSAPP_NUMBER=919860151400
```

## Troubleshooting

### Build Fails
* Check the Vercel build logs for specific errors
* Ensure all dependencies are in `package.json`
* Verify environment variables are set correctly

### Forms Not Working
* Verify EmailJS environment variables are set
* Check EmailJS dashboard for service/template status
* Test with browser console open to see errors

### Site Not Updating
* Check GitHub push was successful: `git log`
* Check Vercel dashboard for deployment status
* May need to trigger manual redeploy in Vercel

## Quick Reference Commands

```bash
# Check current branch
git branch

# Save and commit changes
git add .
git commit -m "Your message"

# Push to GitHub (triggers auto-deploy)
git push origin main

# Check deployment status
# Visit: https://vercel.com/dashboard
```
