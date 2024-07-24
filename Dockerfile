FROM node:22

WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3030
CMD ["npm", "start"]
