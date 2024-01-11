FROM node:latest
WORKDIR  /app
COPY package*.json ./
RUN npm install
COPY prisma ./
COPY init_prisma.sh ./
RUN ./init_prisma.sh
COPY index.ts ./
CMD ["npm", "run", "dev"]