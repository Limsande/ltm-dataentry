# Leipzig Time Machine - Data Entry Tool

## Documentation
Exists in [German](doc/de/doc.md) and in [English](doc/en/doc.md).



## Setup dev environment

To serve the app on [http://localhost:8080](http://localhost:8080), set it up either with or without Docker.

### With Docker
1) Clone this repository
    ```bash
    git clone git@github.com:Limsande/ltm-dataentry.git
    ```

2) Build the Docker image
    ```bash
    cd ltm-dataentry
    docker image build -t ltm .
    ```

3) Install node modules from inside the container
   ```bash
   docker run -ti --rm -v $(pwd):/src -w /src ltm "npm i"
   ```

4) Start a Docker container and start the Webpack server in it
    ```bash
    docker run -ti --rm -v $(pwd):/src --network=host -w /src \
      --name ltm-app ltm bash -c '$(npm bin)/webpack serve --config webpack.conf.js'
    ```


### Without Docker
1) Clone this repository
    ```bash
    git clone git@github.com:Limsande/ltm-dataentry.git
    ```

2) Install node modules
   ```bash
   cd ltm-dataentry
   npm i
   ```

3) Start the Webpack server
    ```bash
    $(npm bin)/webpack serve --config webpack.conf.js
    ```
