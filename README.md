# Frontend Developer Intern Task - CloudCore

## Installation & Setup

To set up this project locally, follow these steps:

## 1. Clone the Repository
```bash```
git clone https://github.com/mdYeasinIslam/job-task-cloudcore.git

## 2. Check or Install npm packages:
```bash 
npm install

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [https://fashion-era-cloudcore.vercel.app/](https://fashion-era-cloudcore.vercel.app/) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Task Overview
This project is a responsive web application that fetches product data from an API using Axios in **Next.js**. The application displays a list of products and allows users to view a single product's details on a dynamic route.

### Requirements:
- **Task 1**: Build a responsive UI to display products fetched from the API.
- **Task 2** (optional): Implement an order placement feature using the provided API.

## Features Implemented:
1. **Responsive Design**: The application is built with Tailwind CSS, ensuring it works seamlessly across devices (desktop, tablet, and mobile).
2. **Fetching Data with Axios**: Products are fetched dynamically from the API using Axios.
3. **Product Details**: Users can click on a product to navigate to a dynamic route where the product details are displayed.
4. **Optimized Performance**: The application ensures that unnecessary re-renders are avoided for smooth user interaction.

### API Endpoints:
- **Fetch Products**:  
  URL: `https://admin.refabry.com/api/all/product/get`  
  This endpoint provides a list of all products.

- **Image URL**:  
  The images of the products are fetched from:  
  `https://admin.refabry.com/storage/product/{product_id}.webp`


