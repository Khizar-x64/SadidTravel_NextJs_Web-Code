# Sadid Travels - Next.js Starter Project

Welcome to the Sadid Travels website project! This is a modern, responsive, and performant web application built with Next.js and Tailwind CSS. It serves as an online brochure for a premium Islamic travel agency, showcasing spiritual journey packages for Umrah, Hajj, and other Islamic tours.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (Playfair Display, PT Sans, Amiri)
- **Linting & Formatting**: ESLint & Prettier (integrated with Next.js)

## Running the Project Locally

To run this project on your local machine, you'll need to have [Node.js](https://nodejs.org/en/download/) (which includes npm) installed. These instructions are for Windows, but the steps are very similar for macOS and Linux.

1.  **Download the Code**: Download the project files as a ZIP from your workspace and unzip them in a folder on your computer.

2.  **Open a Terminal**:
    *   On Windows, you can open Command Prompt, PowerShell, or Windows Terminal.
    *   Navigate to the project's root directory (the folder where `package.json` is located).
    ```bash
    cd path\to\your\project
    ```

3.  **Install Dependencies**: Run the following command to install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

4.  **Run the Development Server**: Once the installation is complete, start the Next.js development server.
    ```bash
    npm run dev
    ```

5.  **View Your Website**: Open your web browser and go to [http://localhost:9002](http://localhost:9002). You should see your Sadid Travels website running!

## Project Structure Explained

Here's a breakdown of the key files and directories and how they work together:

### `src/app/`

This is the core of the application, using the Next.js App Router. Each folder inside `app` corresponds to a URL route.

- **`layout.tsx`**: The main layout for the entire application. It includes the `<html>` and `<body>` tags, imports global CSS, sets up fonts, and wraps all pages with the `Header` and `Footer` components.
- **`page.tsx`**: The homepage of the website, accessible at the root URL (`/`).
- **`loading.tsx`**: A custom loading component that Next.js automatically shows during page transitions and initial loads, providing a seamless user experience with an Islamic-themed spinner.
- **`/about/page.tsx`**: The "About Us" page.
- **`/packages/page.tsx`**: The main packages listing page, which displays all available travel packages.
- **`/packages/[slug]/page.tsx`**: A dynamic route that displays the detailed page for a specific package. The `[slug]` is a placeholder for the package's unique identifier (e.g., `/packages/umrah-deluxe-10-days`).
- **`/blogs/page.tsx`**: The blog listing page.
- **`/blogs/[slug]/page.tsx`**: A dynamic route for individual blog posts.
- **`/contact/page.tsx`**: The contact page, featuring a form and contact details.
- **`/faq/page.tsx`**: The Frequently Asked Questions page.
- **`/privacy/page.tsx`**, **`/refund/page.tsx`**, **`/terms/page.tsx`**: Static pages for legal information.
- **`globals.css`**: The global stylesheet. It contains Tailwind CSS directives, CSS variables for the color theme (in HSL format), and a subtle background pattern for the `body`.

### `src/components/`

This directory contains all the reusable React components used throughout the application.

- **`ui/`**: This sub-directory holds the core UI components from **ShadCN/UI**, such as `Button`, `Card`, `Dialog`, etc. These are pre-built, accessible, and customizable components that form the building blocks of the interface.
- **`layout/`**: Components responsible for the main page structure.
  - **`header.tsx`**: The website's main navigation bar. It's responsive and includes a mobile menu sheet.
  - **`footer.tsx`**: The website's footer, with quick links and social media connections.
- **`contact-form.tsx`**: The interactive contact form used on the contact page.
- **`contact-popup.tsx`**: A pop-up dialog that appears on the homepage to encourage user contact.
- **`package-card.tsx`**: A reusable card component to display a summary of a travel package.
- **`icons.tsx`**: Contains custom SVG icons, including the site's `Logo`.

### `src/lib/`

This directory is for data, types, and utility functions that support the application.

- **`data.ts`**: A central file that imports data from the JSON files and exports it for use in the components. This is where you can see how all the data is connected.
- **`packages.json`**: A JSON file containing all the data for travel packages. This makes it easy to add, remove, or edit packages without touching the code.
- **`blogs.json`**: Contains the content for all blog posts.
- **`testimonials.json`**: Holds the customer reviews/testimonials.
- **`placeholder-images.json`**: A crucial file for managing images. It centralizes all image URLs, descriptions, and AI hints, making image management clean and straightforward.
- **`placeholder-images.ts`**: Imports the JSON data and exports it as a typed array.
- **`types.ts`**: Defines the TypeScript types for our data structures (`Package`, `Blog`, `Testimonial`, etc.), ensuring data consistency and providing autocompletion benefits.
- **`utils.ts`**: Utility functions. The `cn` function here is from ShadCN and is used to merge Tailwind CSS classes conditionally.

### `public/`

This directory contains static assets that are served directly. This is the place for `favicon.ico`, images, or other files that don't need to be processed by the build pipeline.

### Configuration Files

- **`tailwind.config.ts`**: The configuration file for Tailwind CSS. It's where we define our custom theme, such as fonts (`Playfair Display`, `PT Sans`) and the application's color palette using CSS variables.
- **`next.config.ts`**: Configuration for Next.js. Here, we've configured it to allow images from `images.unsplash.com` and `picsum.photos` to be optimized by the `next/image` component.
- **`components.json`**: The configuration file for ShadCN/UI, defining where components are stored and how they are configured.
- **`tsconfig.json`**: The TypeScript configuration file, setting up path aliases (like `@/*` pointing to `src/*`) and compiler rules.

## How to Work with this Project

### Adding a New Package

1.  Open `src/lib/packages.json`.
2.  Copy an existing package object and paste it as a new item in the array.
3.  Change the `id`, `slug`, `title`, `description`, `price`, `imageId`, and other details.
4.  If you're using a new image, add its details to `src/lib/placeholder-images.json` and reference its `id` in the `imageId` field of your new package.
5.  Save the file. The new package will automatically appear on the website.

### Adding a New Blog Post

1.  Open `src/lib/blogs.json`.
2.  Add a new JSON object to the array with a unique `id` and `slug`, and fill in the `title`, `author`, `date`, `excerpt`, and `content`.
3.  Reference an `imageId` from `src/lib/placeholder-images.json`.
4.  The new blog post will now be visible on the `/blogs` page.

This data-driven approach keeps content separate from code, making the website easy to maintain and scale.