# Personal Portfolio - Supabase Style

A modern, responsive personal portfolio website built with React, featuring a clean design inspired by Supabase's aesthetic. This portfolio includes sections for showcasing skills, experience, projects, and contact information with EmailJS integration ready to use.

## ✨ Features

- **Modern Design**: Clean, professional UI inspired by Supabase
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Subtle animations and hover effects
- **Dark Theme**: Modern dark color scheme with green accents
- **Contact Form**: Ready for EmailJS integration
- **Project Showcase**: Filterable project gallery
- **Experience Timeline**: Professional experience with timeline design
- **Skills Grid**: Organized skill categories with technologies
- **Social Links**: Integrated social media connections

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd portfolio-supabase-style
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Customization

### Personal Information

1. **Update content in components:**
   - `src/components/Hero.js` - Name, title, description
   - `src/components/Skills.js` - Your skills and technologies
   - `src/components/Experience.js` - Work experience and achievements
   - `src/components/Projects.js` - Your projects and portfolio items
   - `src/components/Contact.js` - Contact information

2. **Replace placeholder content:**
   - Social media links
   - Email addresses
   - Phone numbers
   - Project images and descriptions

### EmailJS Setup

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Update Contact component:**
   ```javascript
   // In src/components/Contact.js, uncomment and configure:
   import emailjs from 'emailjs-com';
   
   // Replace these with your actual EmailJS credentials
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {...},
     'YOUR_PUBLIC_KEY'
   );
   ```

### Styling

- **Colors**: Edit CSS variables in `src/index.css`
- **Fonts**: Update font imports in `public/index.html`
- **Layout**: Modify component styles using the inline styling approach

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js      # Fixed navigation bar
│   ├── Hero.js           # Hero section with intro
│   ├── Skills.js         # Skills and expertise
│   ├── Experience.js     # Work experience timeline
│   ├── Projects.js       # Project showcase
│   ├── Contact.js        # Contact form and info
│   └── Footer.js         # Footer with links
├── App.js                # Main application component
├── index.js              # React entry point
└── index.css             # Global styles and utilities
```

## 🎨 Design System

### Colors
- **Primary**: `#3ecf8e` (Green)
- **Background**: `#0a0a0a` (Dark)
- **Card**: `#111111` (Dark gray)
- **Border**: `#27272a` (Light gray)
- **Text**: `#fafafa` (Light)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Rounded corners, subtle borders, hover effects
- **Buttons**: Primary (green) and secondary (outlined) variants
- **Grid**: Responsive CSS Grid layout
- **Icons**: Lucide React icon library

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Run `npm run build`
2. Drag the `build` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📝 To-Do After Setup

- [ ] Replace all placeholder content with your information
- [ ] Add your actual project images
- [ ] Set up EmailJS for contact form
- [ ] Update social media links
- [ ] Add your resume/CV link
- [ ] Configure Google Analytics (optional)
- [ ] Set up domain name (optional)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [Supabase](https://supabase.com)
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**Happy coding!** 🚀

If you use this template, I'd love to see what you build. Feel free to share your portfolio with me!