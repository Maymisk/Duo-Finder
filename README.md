<div align="center">
    <img width="400px" src='https://media.tenor.com/dw9EmFbwS2gAAAAM/da.gif' />
</div>

# 🎮 Duo Finder

**Connect with gaming partners seamlessly using Duo Finder — a full-stack matchmaking platform powered by Discord OAuth2.**

## 🧠 Project Overview

Duo Finder is a matchmaking platform designed to help gamers find partners for their favorite games. Built during a bootcamp event, this project showcases a full-stack implementation, integrating Discord's OAuth2 for authentication and providing a responsive user interface for both web and mobile platforms.

## 🚀 Features

- **Discord Authentication:** Secure login using Discord's OAuth2 protocol.
- **Game Listings:** Browse and create advertisements to find gaming partners.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Form Validation:** Robust form handling with real-time validation feedback.

## 🛠️ Tech Stack

### Frontend

- **React** with **TypeScript**
- **Vite** for fast development builds
- **Styled Components** for modular CSS
- **React Router DOM** for client-side routing
- **React Hook Form** and **Yup** for form management and validation
- **Axios** for HTTP requests
- **Radix UI** for accessible UI components

### Backend

- **Node.js** with **Express**
- **SQLite** as the database
- **Prisma** as the ORM for database interactions

### Mobile

- **React Native** for cross-platform mobile development

## 📦 Project Structure

- **/web**: Contains the React web application.
- **/server**: Houses the Express backend API.
- **/mobile**: Includes the React Native mobile application.

## Running locally 💻

First, clone the project and change directories:

```bash
git clone git@github.com:Maymisk/Duo-Finder.git
cd Duo-Finder
```

### Running the back-end server
First, change directories and install the dependencies:

```bash
cd server
```

```bash
yarn 
```
or

```bash
npm install
```

If you wanna try out the discord OAuth2, you'll need to set the environment variables as per the [**.env.example file.**](/server/.env.example)

If you don't set them, then you'll need to disable the authentication requirements for each page. This can be done by commenting the useEffect logic inside the [**withAuthRequired file.**](./web/src/utils/withAuthRequired.tsx)

Then, to run the server,  simply run the "dev" script

```bash
yarn dev
```

or
```bash
npm run dev
```

### Running the web server

First, change directories and install the dependencies:

```bash
cd web
```

```bash
yarn 
```
or

```bash
npm install
```

Run the "dev" script and [**access the 5173 localhost port!**](http://localhost:5173)

```bash
yarn dev
```

or
```bash
npm run dev
```

## Screenshots 📷

![App Screenshot](/.github/assets/screenshot1.png)

![App Screenshot](/.github/assets/screenshot2.png)


