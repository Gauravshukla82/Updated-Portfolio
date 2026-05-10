#!/bin/bash

# Deployment Script for Gaurav Shukla Portfolio
# Targets https://gauravshukla82.github.io/

echo "🚀 Starting Deployment Process..."

# 1. Initialize Git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# 2. Add or Update Remote
REMOTE_URL="https://github.com/Gauravshukla82/Portfolio.git"
if git remote | grep -q "origin"; then
    echo "🔗 Updating existing remote to: $REMOTE_URL"
    git remote set-url origin "$REMOTE_URL"
else
    echo "🔗 Adding new remote: $REMOTE_URL"
    git remote add origin "$REMOTE_URL"
fi

# 3. Add and Commit
echo "📝 Saving changes..."
git add .
git commit -m "Deployment of premium portfolio via automated script"

# 4. Push to Main
echo "⬆️ Pushing to GitHub (main branch)..."
git push -u origin main --force

echo "✅ Code pushed successfully!"
echo "------------------------------------------------"
echo "FINAL STEPS ON GITHUB:"
echo "1. Go to: https://github.com/Gauravshukla82/Portfolio/settings/pages"
echo "2. Set 'Build and deployment > Source' to 'GitHub Actions'"
echo "3. Wait 2-3 minutes for the build to finish."
echo "4. Your site will be live at: https://gauravshukla82.github.io/Portfolio/"
echo "------------------------------------------------"
