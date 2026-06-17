# Sirve la landing estática con nginx
FROM nginx:alpine
COPY index.html styles.css script.js robots.txt sitemap.xml og-image.png /usr/share/nginx/html/
