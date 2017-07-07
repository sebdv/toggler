FROM node:6-onbuild
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 9191
RUN ["npm", "install"]
CMD ["npm", "start"]