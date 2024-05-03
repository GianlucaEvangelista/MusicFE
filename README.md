# Music App

To correctly run the app, put the directories MusicFE (frontend directory) and MusicBE (backend directory) at the same level.

After the Docker containers are created and running, the app is reachable at 

### `http://localhost:3000/`



## Docker 

In the project directory (MusicFE), you can run:

### `docker-compose -p music up --build`

Creates the network of containers for the backend, the frontend and the database and runs all of them. After this the app is ready and running.


Alternatively, it's possible to create a container just for the frontend following these steps:

### `docker build -t music_fe_image .`

Builds the Docker image just for the frontend.


### `docker run -p 3000:80 --name music_fe music_fe_image`

Creates and runs a container using the image created just for the frontend.



## Database

To check the DB tables from Docker Desktop, inside the terminal of the container you can run:

### `psql -U root -d musicDB`

### `\dt`

Shows all the tables of the DB. At this point it's possible to use SQL queries to check the DB.



## Available Scripts (default)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
