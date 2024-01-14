# Duo Finder 👥

This project enables users to find gaming partners for their favorite games by implementing an ad system.
## My journey 🏃‍♂️

During a bootcamp event, I undertook the development of this full-stack project, which helped improve my coding skills. A notable challenge within the project was the implementation of OAuth2 from scratch, particularly focusing on Discord's authentication flow. This marked one of my initial exposures to OAuth2 and its workings.

Additionally, the event covered fundamental aspects of mobile development using React Native. While I didn't prioritize absorbing this knowledge, it was nice to see this other branch of development. 
## Technologies ✨

- **Front End**
    - React ⚛
    - Typescript 🔹
    - Vite ⚡
    - Styled Components 💅
    - React Router DOM 🗺
    - React Hook Form 📃
    - Yup ✅
    - Axios 📄
    - Radix-UI

- **Back End**
    - Express
    - SQLite 📀
    - Prisma 🔺



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

In order to test the discord OAuth2, you'll need to set some environment variables as per the [**.env.example file.**](/web/.env.example)


Once you've set them (or not),  run the "dev" script and [**access the 5173 localhost port!**](http://localhost:5173)

```bash
yarn dev
```

or
```bash
npm run dev
```
## Features 💪 

- Authentication using Discord OAuth2
- Create and read operations for ads (front and back end)
## Screenshots 📷

![App Screenshot](/.github/assets/screenshot1.png)

![App Screenshot](/.github/assets/screenshot2.png)


## Improvements 🔧

- Style the ad listing page
- Create a carousel for the games in the home page
- Create a sign out functionality
- Make the layout responsive
