From node:latest

Copy . /api

Workdir /api

Run npm install --only=production

