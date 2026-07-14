FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
ENV DATABASE_URL="postgresql://user:password@localhost:5432/db"

RUN npx prisma generate


RUN npm run build && \
    echo "===== CONTENU DE /app =====" && \
    ls -la && \
    echo "===== CONTENU DE dist =====" && \
    ls -R dist || true

# CMD ["node", "dist/main "]
CMD ["npm", "run", "start:prod"]
