# image de base qui contient Node.js et npm
FROM node:18

# répertoire de travail dans le conteneur
WORKDIR /app/front

# Copie le fichier package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie tout le reste du projet dans le conteneur
COPY . .

# Exposition du port que l'application React Native utilise (généralement 3000)
EXPOSE 3000

# Démarrage de l'application React Native
CMD ["npm", "start"]