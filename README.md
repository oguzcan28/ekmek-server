# Ekmek Server
Easily access your mining rig logs anywhere all over the 🌎.

## How it works?
Just replace [**Ekmek Client**](https://github.com/ErcouldnT/ekmek-client) near your log file, modify it and check the [**website**](https://ekmek.herokuapp.com).

> *Desktop Client and also Mobile App are on the way!*

## Used technologies:
### Backend
> Node.js \
Express \
Socket.io

### Frontend
> SvelteKit \
Node adapter \
Tailwind CSS \
Socket.io-client \
Dotenv \
Mongoose

### Development
> Nodemon \
> MongoDB Compass

### Production
> Heroku \
Cloudflare \
MongoDB Atlas

## Todo
  * [ ] User login.
  * [ ] Fix favicon.
  * [ ] Add linting.
  * [x] Change theme.
  * [ ] Better UI & UX.
  * [ ] Add GPU logos.
  * [ ] Rig restart button.
  * [ ] Robot.txt and SEO.
  * [x] Socket Cors parameters.
  * [ ] Add Github test workflow.
  * [x] Analyze every log and categorize it.
  * [ ] Send an email & SMS if rig turns off.
  * [ ] Build Svelte files at Heroku build time.
  * [ ] Emergency button & 2 min countdown.
  * [ ] Save logs to localStorage and sync Store.

## Join development
0. Clone this repo
1. Server development `npm run dev`
2. Frontend development `npm run svelte:dev`
3. Don't forget to build your frontend `npm run svelte:build`
4. See the final `npm run start`
5. PR

&copy; 2022 Ercode