FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y curl \
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && apt-get clean

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "server/index.js"]
