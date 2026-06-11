# Sirve la landing estática con nginx
FROM nginx:alpine
COPY index.html styles.css script.js /usr/share/nginx/html/
