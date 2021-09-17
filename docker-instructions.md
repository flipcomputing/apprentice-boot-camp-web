# Docker Compose

Three services are defined in `docker-compose.yml`:

- `database`: runs a postgres database
  - Data is persisted between runs
- `populate-database`: runs another postgres container which is only used to import the data in `/database_backups/sequel-mart-20210904-complete`
  - This only runs when the `initialise` profile is specified, so that it doesn’t have to run every time (otherwise it would try to recreate the database each time).
- `app`: runs the application within a node image
  - This requires `npm install` to be run first, as the node modules are copied into the container

# First time set up

Run `npm install` from your command line to fetch dependencies.

Run `docker compose --profile=initialise up`. This will start the database, wait five seconds, populate the database, and start the application on http://localhost:5000/. Confirm that this works, and then you can use `ctrl c` to stop docker.

# Running the app

Run `docker compose up` to start the database and the application.

# Starting over

To delete your data, run `docker compose down --volumes`. You can now run from ‘First time set up’ again.