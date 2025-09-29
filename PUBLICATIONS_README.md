# Publications Management System

This system allows you to manage your publications dynamically using a CSV file instead of hardcoding them in HTML.

## Files

- `publications.csv` - Contains all publication data
- `publications.js` - JavaScript code to load and display publications
- `index.html` - Main webpage (modified to use dynamic loading)

## CSV Format

The CSV file has the following columns:

- `category` - Research category (reasoning, alignment, nlg, efficient)
- `title` - Paper title
- `authors` - Author list (use **Jian Guan** for bold formatting)
- `venue` - Conference/journal name
- `year` - Publication year
- `links` - Comma-separated links in format "Type:URL" (e.g., "PDF:https://arxiv.org/abs/123,Code:https://github.com/user/repo")
- `highlight` - Optional highlight text (e.g., awards)

## Link Types

Supported link types with icons:
- `PDF` - PDF link (📄 icon)
- `Code` - GitHub code (🐙 icon)
- `Data` - Dataset link (💾 icon)
- `Toolkit` - Toolkit link (🔧 icon)
- `Demo` - Demo link (🌐 icon)

## Adding New Publications

1. Open `publications.csv`
2. Add a new row with your publication data
3. Save the file
4. The website will automatically display the new publication

## Example CSV Row

```csv
reasoning,"New Paper Title","Author1, **Jian Guan**, Author2","ACL",2025,"PDF:https://arxiv.org/abs/123,Code:https://github.com/user/repo","Best Paper Award"
```

## Benefits

- ✅ Easy to maintain and update publications
- ✅ No need to edit HTML for new papers
- ✅ Consistent formatting across all publications
- ✅ Easy to add new categories or link types
- ✅ Version control friendly (CSV is easier to diff than HTML)

## Technical Details

The system uses:
- Fetch API to load CSV data
- Custom CSV parser to handle quoted fields
- Dynamic HTML generation
- Event listeners for category switching
- Responsive design maintained from original CSS
