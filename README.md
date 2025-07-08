# Web Developer Portfolio Website

A modern, professional portfolio website showcasing web development skills, projects, and contact information. Built with HTML5, CSS3, and JavaScript with responsive design and smooth animations.

## 🌟 Features

### Main Portfolio (index.html)
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional summary with statistics
- **Skills Section**: Interactive technology cards with icons for:
  - Angular
  - React
  - Next.js
  - Node.js
  - Java
  - Prisma
  - SQL
- **Projects Section**: Dynamic GitHub integration displaying:
  - Angular_ToDoList
  - books-ecommerce-SantanderCoders2023.2-Modulo5
  - efood2
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Smooth Animations**: Scroll-triggered animations and hover effects

### Contact Page (contact.html)
- **Professional Contact Form**: With validation and project type selection
- **Contact Information**: Email, phone, location, and response time
- **Social Media Links**: GitHub, LinkedIn, Twitter integration
- **Budget Selection**: Project budget range options

### Technical Features
- **GitHub API Integration**: Fetches project data (currently using demo data)
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced user experience
- **Loading States**: Professional loading animations
- **Form Handling**: Contact form with submission feedback
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

1. **Clone or download** the repository
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your information

## 📁 File Structure

```
portfolio/
├── index.html          # Main portfolio page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Customization Guide

### 1. Personal Information

**Update the following in `index.html`:**
- Change "Portfolio" in navigation to your name
- Update hero section text
- Modify about section content
- Update statistics in about section
- Update footer information

**Update the following in `contact.html`:**
- Replace contact information (email, phone, location)
- Update social media links
- Modify contact form recipient

### 2. GitHub Projects Integration

**To connect real GitHub API:**

1. **Get your GitHub username**
2. **Update `script.js`** around line 62:
   ```javascript
   // Replace 'your-username' with your actual GitHub username
   const apiUrl = `https://api.github.com/repos/your-username/${projectName}`;
   ```

3. **For real API integration**, replace the demo projects section with:
   ```javascript
   const projectPromises = projectNames.map(async (projectName) => {
       const response = await fetch(`https://api.github.com/repos/your-username/${projectName}`);
       return await response.json();
   });
   
   const projects = await Promise.all(projectPromises);
   ```

### 3. Styling Customization

**Colors**: Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #fbbf24;
    --text-color: #333;
    --background-color: #f9fafb;
}
```

**Fonts**: Change the Google Fonts import in both HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 4. Adding New Sections

1. **Create HTML structure** in `index.html`
2. **Add corresponding CSS** in `styles.css`
3. **Update navigation** if needed
4. **Add JavaScript functionality** if required

### 5. Adding More Projects

**Manual method (current):**
- Update the `demoProjects` array in `script.js`
- Add project information following the existing structure

**GitHub API method:**
- Add project names to the `projectNames` array
- Ensure repositories exist in your GitHub account

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Eye-catching hero sections
- **Glass Morphism Effects**: Subtle backdrop filters
- **Hover Animations**: Interactive cards and buttons
- **Responsive Grid Layouts**: Adapts to all screen sizes
- **Professional Typography**: Clean, readable font hierarchy
- **Color-coded Languages**: Technology-specific color schemes

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Compatibility

- **Chrome**: 70+
- **Firefox**: 65+
- **Safari**: 12+
- **Edge**: 79+

## 📧 Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **Choose a form service**:
   - Netlify Forms (if hosting on Netlify)
   - Formspree
   - EmailJS
   - Custom backend

2. **Update form action** in `contact.html`
3. **Modify JavaScript** in `script.js` to handle real submissions

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Connect GitHub repository
2. Deploy automatically on push
3. Enable form handling if using Netlify Forms

### Vercel
1. Import GitHub repository
2. Deploy with automatic builds
3. Custom domain support

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and titles
- Alt text for images
- Structured data ready
- Fast loading times
- Mobile-first responsive design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing this portfolio or have questions, feel free to reach out through the contact form or open an issue in the repository.

---

**Built with ❤️ for the developer community**