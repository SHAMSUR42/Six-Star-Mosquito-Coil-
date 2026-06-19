const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Convert to Blogger XML Template
html = html.replace(
    '<!DOCTYPE html>\n<html lang="bn" class="scroll-smooth">', 
    `<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE html>\n<html b:css='false' b:defaultwidgetversion='2' b:js='false' b:layoutVersion='3' b:responsive='true' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>`
);

html = html.replace(
    '<title>সিক্স স্টার মশার কয়েল - Six Star Mosquito Coil</title>', 
    '<title><data:blog.pageTitle/></title>'
);

// Self-close void elements for XML compatibility
html = html.replace(/<meta([^>]+)(?<!\/)>/g, '<meta$1 />');
html = html.replace(/<link([^>]+)(?<!\/)>/g, '<link$1 />');

// Fix URL ampersands for XML 
html = html.replace(/&display=swap/g, '&amp;display=swap');
html = html.replace(/&family=/g, '&amp;family=');
html = html.replace(/&text=/g, '&amp;text=');

// Fix img tags
html = html.replace(/<img(.*?)>/g, (match, p1) => {
    if(p1.trim().endsWith('/')) {
        return match;
    }
    return `<img${p1} />`;
});

// Convert style to b:skin (Required by Blogger)
html = html.replace(/<style>/g, '<b:skin><![CDATA[');
html = html.replace(/<\/style>/g, ']]></b:skin>');

// Add a required b:section to body
html = html.replace(/<body([^>]*)>/, `<body$1>\n    <!-- Blogger requires at least one b:section -->\n    <b:section id='main' class='hidden' showaddelement='no'/>`);

fs.writeFileSync('blogger_theme.xml', html);
console.log('Successfully created blogger_theme.xml');
