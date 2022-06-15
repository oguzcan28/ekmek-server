# Ekmek Server
Easily access your mining rig logs anywhere all over the 🌎.

## How it works?
Just replace [**Ekmek Client**](https://github.com/ErcouldnT/ekmek-client) near your log file, modify it and check the [**website**](https://ekmek.herokuapp.com).

> *Desktop app and also mobile app are on the way...*

## Used technologies:
### Backend
> Express \
Socket.io \
Dotenv \
Mongoose

### Frontend
> SvelteKit \
Node adapter \
Socket.io-client \
Tailwind CSS

### Development
> Nodemon \
> MongoDB Compass

### Production
> Heroku \
Cloudflare \
MongoDB Atlas

## Todo
  * [ ] Build Svelte files at Heroku build time.
  * [x] Socket Cors parameters.
  * [ ] Better UI & UX.

## Join development
0. Clone this repo
1. Server development `npm run dev`
2. Frontend development `npm run svelte:dev`
3. Don't forget to build your frontend `npm run svelte:build`
4. See the final `npm run start`
5. PR

&copy; 2022 Ercode