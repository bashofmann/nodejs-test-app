FROM registry.suse.com/bci/nodejs:16

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "/app/index.js"]

EXPOSE 3000
