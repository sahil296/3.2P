# SIT725 Prac 3 – Coffee House

An Express + Materialize web app for SIT725 Task 3.2P. It follows the Week 3 workshop structure, but uses a coffee menu instead of the kitten cards.

## Features
- Express server serving static files from `public/`
- `GET /api/coffees` returns the coffee cards as JSON, and the client builds the Materialize cards from it
- `POST /api/orders` receives the order from the modal form
- Materialize navbar, materialbox image, cards with reveal, modal form, select, toast

## Run locally
```bash
npm install
npm start
```
Open http://localhost:3000. The API is at http://localhost:3000/api/coffees.

## Structure
```
server.js
package.json
public/
  index.html
  css/styles.css
  js/scripts.js
  images/
```
