const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    if (dir.includes('node_modules') || dir.includes('.git')) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
};

walk('src', (filepath) => {
    if (filepath.endsWith('.js')) {
        let content = fs.readFileSync(filepath, 'utf8');
        let original = content;

        // Replace backgroundImage: 'url(/...)' - handle single and double quotes
        content = content.replace(/backgroundImage:\s*['"]url\(\/(.*?)\)['"]/g, "backgroundImage: `url(${process.env.PUBLIC_URL}/$1)`");
        // Handle the case where it's property: 'url(/...)' directly
        content = content.replace(/backgroundImage:\s*url\(\/(.*?)\)/g, "backgroundImage: `url(${process.env.PUBLIC_URL}/$1)`");

        // Replace image: "/...", logo: "/...", avatar: "/...", src: "/...", imgSrc: "/..."
        // but ONLY if it starts with / and followed by alphanumeric (to avoid replacing / as path)
        const props = ['image', 'logo', 'avatar', 'src', 'imgSrc'];
        props.forEach(prop => {
            const regex = new RegExp(`${prop}:\\s*['"]\\/([a-zA-Z0-9].*?)['"]`, 'g');
            content = content.replace(regex, `${prop}: process.env.PUBLIC_URL + '/$1'`);
        });

        // Special case for <img src="..." />
        content = content.replace(/src=["']\/([a-zA-Z0-9].*?)["']/g, (match, p1) => {
            // Avoid replacing if it's already using PUBLIC_URL or similar (unlikely with this regex)
            return `src={process.env.PUBLIC_URL + "/${p1}"}`;
        });

        if (content !== original) {
            fs.writeFileSync(filepath, content);
            console.log('Updated: ' + filepath);
        }
    }
});
