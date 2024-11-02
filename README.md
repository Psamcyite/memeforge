# MemeForge

Welcome to **MemeForge** – a web app designed to make meme creation fun, fast, and easy! With powerful tools for customization, user-friendly features, and secure authentication, MemeForge is perfect for turning ideas into shareable humor.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Image Management**: [ImageKit](https://imagekit.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Auth.js](https://authjs.dev/)
- **Database ORM**: [Drizzle](https://orm.drizzle.team/)
- **Database**: [Neon](https://neon.tech/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Features

- **Custom Meme Creation**: Upload images or use templates, add text, and edit colors and fonts to make your memes unique.
- **User Authentication**: Securely sign up, log in, and manage user accounts with Auth.js.
- **Responsive Design**: Enjoy a seamless experience across devices with Tailwind CSS.
- **Image Optimization**: Efficient image delivery using ImageKit, so memes load fast and look sharp.
- **Real-time Database Updates**: Manage and access meme data through Drizzle and Neon integration.
- **Fast Build and Install**: Powered by pnpm for efficient dependency management.

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **pnpm** (version 7 or higher)
- **ImageKit Account** (for image management)
- **Neon Database** (for storage)
- **Auth.js** (for authentication)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Psamcyite/memeforge.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd memeforge
   ```

3. **Install dependencies using pnpm:**
   ```bash
   pnpm install
   ```

4. **Set up environment variables:**

   Create a `.env.local` file and add the following:

   ```env
   NEXT_PUBLIC_IMAGEKIT_URL=https://ik.imagekit.io/your_imagekit_id
   NEXT_PUBLIC_AUTH_SECRET=your_auth_secret
   DATABASE_URL=your_neon_database_url
   ```

5. **Run the development server:**
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Sign Up / Log In**: Start by creating an account or logging in to access full features.
2. **Create a Meme**: Upload an image or choose from templates, add captions, and apply styling.
3. **Save and Share**: Save your memes to your account or share directly with friends.

## File Structure

- **`/pages`** – Contains the main routes of the app, including the home page, meme editor, and user profile pages.
- **`/components`** – Reusable components such as the meme editor, navbar, and footer.
- **`/utils`** – Helper functions, including image optimizations and database connectors.
- **`/styles`** – Tailwind CSS configuration and global styles.

## Contributing

We welcome contributions! To contribute:

1. **Fork the repository** and clone it to your local machine.
2. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes** and commit:
   ```bash
   git commit -m "Add your feature"
   ```

4. **Push the branch** to your fork:
   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request** for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out:

- **Email**: contact@psamcyitedev.pro
- **Website**: [psamcyitedev.pro](https://psamcyitedev.pro)