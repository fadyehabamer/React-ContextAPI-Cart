# React ContextAPI Cart

[![CI](https://github.com/fadyehabamer/React-ContextAPI-Cart/actions/workflows/ci.yml/badge.svg)](https://github.com/fadyehabamer/React-ContextAPI-Cart/actions/workflows/ci.yml)

> Cart Functionality built with React &amp; Context API 

**Live demo:** https://react-context-api-cart.vercel.app/

A small shop demo: browse products, add them to a cart shared through React
Context, adjust quantities on the `/cart` page and see the running total.

### Tools used
- React
- Context API for State Mangment
- React-Router-Dom V6
- Vite
- CSS

### Installation
> Open your CLI
- npm install
- npm run dev

### Scripts
| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the cart logic unit tests (Node's built-in test runner, Node 18+) |

### Deployment
Deployed on Vercel. `vercel.json` rewrites every path to `index.html` so
client-side routes such as `/cart` work on refresh.
