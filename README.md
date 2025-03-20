# ScanKeeper Website - Gatsby Version

This is a Gatsby-based website for the ScanKeeper application - a tool for scanning, storing, and organizing QR codes and barcodes.

## Project Structure

```
website/                  # Root directory for the website
├── src/                  # Source files
│   ├── pages/            # React components that represent pages
│   ├── components/       # Reusable React components
│   ├── templates/        # Templates for programmatically created pages
│   ├── images/           # Images used in the site
│   ├── styles/           # CSS files
│   └── markdown/         # Markdown content (Privacy Policy, etc.)
├── static/               # Static assets that will be copied to the public folder
├── gatsby-config.js      # Configuration for Gatsby
├── gatsby-node.js        # Node.js API implementation to customize the build
└── package.json          # Dependencies and scripts
```

## Features

- **Modern JavaScript** - Built with React and Gatsby
- **Markdown Support** - Content like Privacy Policy is written in Markdown and automatically transformed to HTML
- **Responsive Design** - Looks great on all devices
- **Fast Performance** - Optimized build with static site generation
- **System Fonts** - Uses system fonts for better performance

## Development

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/scankeeper-website.git
   cd scankeeper-website/website
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run develop
   ```

4. Open your browser and visit `http://localhost:8000`

## Build

To build the site for production:

```
npm run build
```

This will generate a static site in the `public` directory that you can deploy to any hosting service.

## Deployment

The site can be easily deployed to GitHub Pages, Netlify, Vercel, or any other static site hosting service.

### GitHub Pages

1. Build the site:

   ```
   npm run build
   ```

2. Move the contents of the `public` directory to the appropriate branch or repository for GitHub Pages.

### Netlify/Vercel

Both Netlify and Vercel have direct integration with GitHub repositories. Connect your repository and they will automatically build and deploy your site.

## Customization

### Content

- Edit the Markdown files in the `src/markdown/` directory to update content like the Privacy Policy
- Update the images in the `static/` directory to change logos, app screenshots, etc.

### Styling

- Edit the CSS in `src/styles/global.css` to change the site's appearance

### Pages

- Modify or add pages in the `src/pages/` directory

## License

This project is available as open source under the terms of the MIT License.
