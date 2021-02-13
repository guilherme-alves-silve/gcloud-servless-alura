FROM node:10
LABEL maintainer="Guilherme"
ENV USER=forum-alura
ENV PASSWORD=mysecretpassword
COPY ./ /app
EXPOSE 3000
CMD ["node", "/app/api/index.js"]
