# Jian Guan - Academic Homepage

A modern, responsive academic homepage built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional academic styling
- **Interactive Elements**: Smooth scrolling, animations, and category filtering
- **Publication Management**: Organized by research categories
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 File Structure

```
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── Jian.jpeg          # Profile image (you need to add this)
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Add Your Profile Image
Place your profile image named `Jian.jpeg` in the root directory.

### 2. Customize Content
Edit `index.html` to update:
- Personal information
- Research interests
- Publications
- Awards
- Teaching experience

### 3. Deploy to GitHub Pages

#### Option A: Direct Upload
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://username.github.io/repository-name`

#### Option B: Using Git
```bash
# Clone or initialize repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repository-name.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more variables */
}
```

### Sections
- **Hero**: Update name, title, and contact information
- **About**: Modify the biography and research interests
- **Publications**: Add/remove papers in categorized sections
- **Awards**: Update achievements and honors
- **Teaching**: Modify courses and teaching experience

### Publications
Publications are organized into categories:
- Advanced Reasoning in LLMs and LVLMs
- Personalized Alignment  
- Natural Language Generation
- Others

To add a new publication:
```html
<div class="publication-item">
    <div class="pub-title">Your Paper Title</div>
    <div class="pub-authors">Authors List</div>
    <div class="pub-venue">Conference/Journal</div>
    <div class="pub-links">
        <a href="pdf-link" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a>
        <a href="code-link" target="_blank"><i class="fab fa-github"></i> Code</a>
    </div>
</div>
```

## 🔧 Advanced Features

### Optional Enhancements
Uncomment in `script.js` to enable:
- Dark/Light theme toggle
- Preloader animation
- Parallax scrolling effects
- Type writer animation

### Performance Tips
- Optimize images before uploading
- Consider using WebP format for better compression
- Enable browser caching via `.htaccess` (if supported)

## 📱 Mobile Optimization

The site is fully responsive with:
- Collapsible mobile navigation
- Touch-friendly buttons
- Optimized text sizes
- Proper viewport handling

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags for social sharing
- Structured data markup

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source. Feel free to use and modify for your own academic homepage.

## 🤝 Contributing

If you find bugs or have suggestions for improvements, please feel free to:
1. Open an issue
2. Submit a pull request
3. Share your feedback

## 📞 Contact

For questions about this template, please reach out via the contact information on the homepage.

---

**Note**: Remember to replace the placeholder content with your own information before deploying! 