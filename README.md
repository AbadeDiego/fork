…or create a new repository on the command line

echo "# 4211" >> README.md
git init
git add README.md
git commit -m "third commit"
git branch -M main
git remote add origin https://github.com/AbadeDiego/blog.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/AbadeDiego/4211.git
git branch -M main
git push -u origin main