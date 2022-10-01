FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

# Install
RUN yarn install --frozen-lockfile

# Copy app
COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]