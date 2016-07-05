FROM darron:node-5.1.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# set up npm features
RUN npm completion >>.bashrc
RUN echo "alias npm-exec='PATH=$(npm bin):$PATH'" >>.bashrc

# install n, and use it to install latest node
RUN npm install n --global
RUN n 5.1.1

# Bundle app source
COPY . /

EXPOSE 9000

CMD [ "npm", "start" ]
