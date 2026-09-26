# IT Engineer Portfolio Website

A modern, responsive portfolio website built with React and Vite. This portfolio showcases skills, projects, and professional experience in both English and Arabic languages.

## 🚀 Features

- **🌐 Bilingual Support:** English & Arabic language support with context API
- **🎨 Modern Design:** Clean, responsive design with dark/light theme toggle
- **⚡ Fast Performance:** Built with Vite for optimal performance and fast builds
- **📱 Mobile Responsive:** Fully responsive design for all devices
- **🔍 SEO Optimized:** Meta tags, Open Graph, and Twitter Cards support
- **🎯 Code Splitting:** Lazy loading for optimal performance
- **🗺️ Routing:** Client-side routing with React Router DOM

## 🛠️ Technologies Used

- **Frontend:** React 18, React Router DOM
- **Styling:** CSS Modules, Inter Font Family
- **Icons:** React Icons
- **Build Tool:** Vite
- **Development:** ESLint, Prettier (recommended)

## 📁 Project Structure

```
MyPerson/
├── src/
│   ├── components/     # Reusable components (Navbar, Footer)
│   ├── context/       # Context providers (Language, Theme)
│   ├── pages/         # Page components (Home, About, Skills, etc.)
│   ├── assets/        # Images and static files
│   ├── translations.js # Language translations
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static files
├── dist/              # Production build (generated)
└── index.html         # Main HTML file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd MyPerson
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy!

### Option 2: GitHub Pages
1. Build the project: `npm run build`
2. Create `.nojekyll` file in `dist` folder
3. Push the `dist` folder to your GitHub repository
4. Go to repository Settings → Pages
5. Set source to `main` branch and `/dist` folder
6. Save and wait for deployment

### Option 3: Netlify
1. Drag and drop your `dist` folder to Netlify
2. Or connect your GitHub repository
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## 📱 Pages

1. **Home:** Introduction and main highlights
2. **About:** Personal bio and specialization areas
3. **Skills:** Technical skills and technologies
4. **Projects:** Portfolio projects with filters
5. **Experience:** Professional experience timeline
6. **Education:** Academic background and certifications
7. **Contact:** Contact form and information

## 🔧 Customization

### Changing Content
- Update text content in `src/translations.js`
- Modify page components in `src/pages/`
- Add new images to `src/assets/`

### Changing Styles
- Edit CSS files in respective component folders
- Update global styles in `src/index.css`

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add translation in `src/translations.js`

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

IT Engineer - Professional portfolio showcasing software development and AI expertise.

---

**Note:** Replace placeholder URLs, images, and content with your actual information before deployment.