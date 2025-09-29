// Publications data loader and renderer
class PublicationsManager {
    constructor() {
        this.publications = [];
        this.currentCategory = 'reasoning';
        this.init();
    }

    async init() {
        await this.loadPublications();
        this.renderPublications();
        this.setupEventListeners();
    }

    async loadPublications() {
        try {
            const response = await fetch('publications.csv');
            const csvText = await response.text();
            this.publications = this.parseCSV(csvText);
        } catch (error) {
            console.error('Error loading publications:', error);
            // Fallback to empty array if CSV fails to load
            this.publications = [];
        }
    }

    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',');
        const publications = [];

        for (let i = 1; i < lines.length; i++) {
            const values = this.parseCSVLine(lines[i]);
            if (values.length >= headers.length) {
                const publication = {};
                headers.forEach((header, index) => {
                    publication[header.trim()] = values[index] ? values[index].trim() : '';
                });
                publications.push(publication);
            }
        }

        return publications;
    }

    parseCSVLine(line) {
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        
        values.push(current.trim());
        return values;
    }

    renderPublications() {
        const categories = ['all', 'reasoning', 'alignment', 'nlg', 'efficient'];
        
        categories.forEach(category => {
            const categoryElement = document.getElementById(category);
            if (categoryElement) {
                let categoryPublications;
                if (category === 'all') {
                    // For 'all' category, get all publications and sort by year (newest first)
                    categoryPublications = [...this.publications].sort((a, b) => {
                        const yearA = parseInt(a.year) || 0;
                        const yearB = parseInt(b.year) || 0;
                        return yearB - yearA; // Newest first
                    });
                } else {
                    categoryPublications = this.publications.filter(pub => pub.category === category);
                }
                categoryElement.innerHTML = this.generatePublicationsHTML(categoryPublications);
            }
        });
    }

    generatePublicationsHTML(publications) {
        if (publications.length === 0) {
            return '<p>No publications found for this category.</p>';
        }

        return `
            <div class="publications-list">
                ${publications.map((pub, index) => this.generatePublicationHTML(pub, index + 1)).join('')}
            </div>
        `;
    }

    generatePublicationHTML(publication, number) {
        const links = this.parseLinks(publication.links);
        const highlight = publication.highlight ? `<span class="highlight">🏅 ${publication.highlight}</span>` : '';
        const formattedAuthors = this.formatAuthors(publication.authors);
        
        return `
            <div class="publication-item">
                <div class="pub-number">${number}.</div>
                <div class="pub-content">
                    <div class="pub-title">${publication.title}</div>
                    <div class="pub-authors">${formattedAuthors}</div>
                    <div class="pub-venue">${publication.venue} ${publication.year}</div>
                    <div class="pub-links">
                        ${links.map(link => this.generateLinkHTML(link)).join('')}
                        ${highlight}
                    </div>
                </div>
            </div>
        `;
    }

    formatAuthors(authorsString) {
        if (!authorsString) return '';
        
        let formattedAuthors = authorsString;
        
        // First, handle the most specific cases to avoid conflicts
        // 1. **Jian Guan** (markdown bold)
        formattedAuthors = formattedAuthors.replace(/\*\*Jian Guan\*\*/g, '<strong style="text-decoration: underline;">Jian Guan</strong>');
        
        // 2. Jian Guan* (with asterisk)
        formattedAuthors = formattedAuthors.replace(/Jian Guan\*/g, '<strong style="text-decoration: underline;">Jian Guan</strong>*');
        
        // 3. <strong>Jian Guan</strong> (already HTML bold)
        formattedAuthors = formattedAuthors.replace(/<strong>Jian Guan<\/strong>/g, '<strong style="text-decoration: underline;">Jian Guan</strong>');
        
        // 4. Plain Jian Guan (only if not already wrapped in HTML tags)
        if (!formattedAuthors.includes('<strong')) {
            formattedAuthors = formattedAuthors.replace(/Jian Guan/g, '<strong style="text-decoration: underline;">Jian Guan</strong>');
        }
        
        return formattedAuthors;
    }

    parseLinks(linksString) {
        if (!linksString) return [];
        
        const links = [];
        const linkPairs = linksString.split(',');
        
        linkPairs.forEach(pair => {
            // Find the first colon to separate type from URL
            const firstColonIndex = pair.indexOf(':');
            if (firstColonIndex > 0) {
                const type = pair.substring(0, firstColonIndex).trim();
                const url = pair.substring(firstColonIndex + 1).trim();
                if (type && url) {
                    links.push({ type: type, url: url });
                }
            }
        });
        
        return links;
    }

    generateLinkHTML(link) {
        const iconMap = {
            'PDF': 'fas fa-file-pdf',
            'Code': 'fab fa-github',
            'Data': 'fas fa-database',
            'Toolkit': 'fas fa-toolbox',
            'Demo': 'fas fa-globe'
        };

        const icon = iconMap[link.type] || 'fas fa-external-link-alt';
        
        return `
            <a href="${link.url}" target="_blank">
                <i class="${icon}"></i> ${link.type}
            </a>
        `;
    }

    setupEventListeners() {
        // Handle research interest card clicks
        const researchCards = document.querySelectorAll('.research-interest-card');
        researchCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                this.switchCategory(category);
            });
        });
    }

    switchCategory(category) {
        // Update active card
        document.querySelectorAll('.research-interest-card').forEach(card => {
            card.classList.remove('active');
        });
        const activeCard = document.querySelector(`[data-category="${category}"]`);
        if (activeCard) {
            activeCard.classList.add('active');
        }

        // Update active category
        document.querySelectorAll('.publication-category').forEach(cat => {
            cat.classList.remove('active');
        });
        const activeCategory = document.getElementById(category);
        if (activeCategory) {
            activeCategory.classList.add('active');
        }

        this.currentCategory = category;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PublicationsManager();
});
