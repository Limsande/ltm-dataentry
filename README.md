# Leipzig Time Machine - Data Entry Tool



## Setup dev environment
1) Clone this repository
    ```bash
    git clone git@github.com:Limsande/ltm-dataentry.git
    ```

2) We also need a CORS proxy, because the backend does not set the `Access-Control-Allow-Origin`
   header and so the browser will block our requests. The proxy has to serve the backend at
   `http://localhost:3000`. We need the proxy's directory to mount it into the Docker container:
   ```bash
   cors_proxy="/path/to/proxy"
   ```
   
3) Build the Docker image
    ```bash
    cd ltm-dataentry
    docker image build -t ltm .
    ```

4) Start a Docker container and start the Webpack server in it
    ```bash
    docker run -ti --rm -v $(pwd):/src -v "$cors_proxy":/cors_proxy \
      --network=host -v /tmp/.X11-unix -e DISPLAY -w /src \
      --name ltm-app ltm bash
   
    # Inside the container
    $(npm bin)/webpack serve --config webpack.conf.js
    ```

5) Fire up the CORS proxy inside the container (assumed, `run.sh` starts the proxy)
   ```bash
   docker exec -ti -w /cors_proxy ltm-app bash run.sh
   ```

The app now serves on [http://localhost:8080](http://localhost:8080).