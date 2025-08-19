# E-commerce product page solution

This is a solution to the **E-commerce product page challenge**

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

This is a fully interactive e-commerce product page I built with React, Vite, TypeScript, and Tailwind CSS.

The page includes dynamic cart functionality, product image previews, and a responsive design that adapts beautifully across desktop and mobile.

I built this project as part of my frontend engineering learning journey, with the goal of practicing real-world patterns and improving how I handle UI/UX details.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

- [App Screenshot](https://ibb.co/t9Q67hP)

### Links

- Repository: [Github Repo](https://github.com/mavic01/E-Commerce-Product)
- Live Site URL: [E-Commerce Product Page](https://e-commerce-product-yiw9.vercel.app/)

## My process

**Built with**

- ⚛️ React 18 – component-based UI

- ⚡ Vite – fast build tool & dev server

- 📘 TypeScript – type-safe state & props

- 🎨 Tailwind CSS – responsive, utility-first styling


### What I learned

This project reinforced a lot of practical frontend skills for me:

- Handling state management with React hooks (`useState`) to track cart count and menu toggles.  
- Passing state between components cleanly in TypeScript.  
- Using Tailwind utilities for responsive design instead of writing custom CSS.  
- Improving UX details:
  - Making sure the cart doesn’t overflow on mobile.
  - Adding a dark overlay for better focus when the mobile menu is open.

### Continued development

Areas I’d like to explore next:

- Add a lightbox modal for zooming product images.

- Persist cart items with localStorage.

- Replace hardcoded product data with a mock API.

- Experiment with context API or Zustand for global state instead of prop drilling.

### Useful resources

- Tailwind CSS Docs – super helpful for responsive utilities.

- React Docs – for clarifying component patterns.

- TypeScript Handbook – to avoid type errors when passing props.

## Author

👤 Victor Iberi

- Portfolio: [https://mavic-portfolio.vercel.app/]

- GitHub: https://github.com/mavic01

## Acknowledgments

Thanks to AltSchool Africa and my personal practice projects for giving me the structure to keep building and refining my frontend skills. Also, a big shoutout to open-source docs and tutorials that made solving tricky UI/UX details (like the mobile menu animation) much easier.
