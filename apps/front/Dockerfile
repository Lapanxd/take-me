FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# Copie le fichier package.json et package-lock.json dans le conteneur
COPY package*.json ./
COPY bin ./bin

# Installation des dépendances
RUN npm install

# Copie tout le reste du projet dans le conteneur
COPY . .

# Exposition du port que l'application React Native utilise (généralement 3000)
EXPOSE 3000

# Démarrage de l'application React Native
CMD ["pnpm", "start"]