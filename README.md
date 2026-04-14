<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" />
</p>

<h1 align="center">🎓 Plateforme SaaS de Gestion Scolaire</h1>

<p align="center">
Une application complète de gestion d'école développée avec <b>NestJS</b>, <b>ReactJS</b> et des outils DevOps modernes.
</p>

---

## 📌 Description

Ce projet est une **plateforme SaaS de gestion scolaire** permettant de gérer efficacement tous les acteurs d’un établissement :

* 👨‍🏫 Gestion des professeurs
* 👨‍🎓 Gestion des élèves
* 👨‍👩‍👧 Accès pour les parents
* 🧑‍💼 Administration et personnel
* 📊 Suivi des notes et performances

Ce projet s’inscrit dans une démarche d’apprentissage pour maîtriser le **développement full-stack**, ainsi que les bonnes pratiques en **architecture backend** et **DevOps**.

---

## 🚀 Technologies utilisées

### Backend

* NestJS (framework Node.js)
* Prisma ORM
* PostgreSQL

### Frontend (à venir)

* ReactJS

### DevOps

* Docker
* Git & GitHub
* CI/CD (GitHub Actions - à venir)

---

## 🔐 Fonctionnalités (MVP)

* Authentification sécurisée (JWT)
* Gestion des rôles (RBAC) :

  * Admin
  * Professeur
  * Parent
  * Gestionnaire
* Gestion des utilisateurs
* Gestion des élèves
* Gestion des classes
* Système de notes

---

## 🛠️ Installation du projet

```bash
npm install
```

---

## ▶️ Lancer le projet

```bash
# mode développement
npm run start:dev

# mode production
npm run build
npm run start:prod
```

---

## 🐳 Docker

```bash
docker-compose up --build
```

---

## 📂 Structure du projet

```bash
src/
 ├── auth/
 ├── users/
 ├── students/
 ├── classes/
 ├── grades/
 ├── common/
 ├── config/
```

---

## 📈 Roadmap

* [x] Initialisation du projet (NestJS + Docker + Prisma)
* [ ] Système d’authentification (JWT)
* [ ] Gestion des rôles
* [ ] Modules élèves & classes
* [ ] Intégration frontend (React)
* [ ] Déploiement (Cloud)

---

## 👨‍💻 Auteur

**Mor Mbathie**

* Développeur full-stack en progression
* Intéressé par le backend, le DevOps et les architectures scalables

---

## 📄 Licence

Ce projet est sous licence MIT.
