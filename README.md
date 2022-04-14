# Database Bootcamp 2021

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [What you can expect?](#what-you-can-expect)
	- [Day 1](#day-1)
	- [Day 2](#day-2)
	- [Timing and Breaks](#timing-and-breaks)
	- [General Advice for the Bootcamp](#general-advice-for-the-bootcamp)
- [Essential Tools](#essential-tools)
	- [Optional Tools](#optional-tools)
- [Other Software and Extensions Used](#other-software-and-extensions-used)
	- [Front-End](#front-end)
	- [Back-End](#back-end)
- [Installation Options](#installation-options)
	- [1 Docker Compose](#1-docker-compose)
	- [2 Remote Desktop](#2-remote-desktop)
- [Installing PostgreSQL Locally](#installing-postgresql-locally)
- [Cloning the Repo Locally](#cloning-the-repo-locally)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---


&nbsp;

# Overview
- A sample database based on a fictional retail company (Sequel-Mart).
- A basic front-end using vanilla HTML, CSS & Javascript with Express.  It shows how a database-driven relationship to a back-end web server could be managed.

# Screenshot

Completed Sequel-Mart project web page:
![Sequel-Mart-Finished-Project](https://user-images.githubusercontent.com/60580622/139313616-0d045bb2-a4e9-4cf7-84ff-cfd7b1e27272.png)

&nbsp;

# What you can expect?

## Day 1
### Section 1 (What are databases?)
- Introduction & Set-up either with Remote Desktop or via Docker
- How databases fit into a front-end / back-end architecture
- Fundamental concepts of databases (Data Types, ERDs, Normalisation)
- Connect to PostgreSQL database (including basic security)

### Section 2 (Querying a relational database - **CR**UD)
- Create (`CREATE TABLE`)
- Read (`SELECT` `FROM`, `WHERE`, `ORDER BY`, `GROUP BY`, `HAVING`, `LIMIT`)
- Joining (`INNER JOIN`, `LEFT OUTER JOIN`)

### Section 3 (Changing content in a relational database - CR**UD**)
- Update (`INSERT`, `UPDATE`)
- Delete (`DELETE`, `TRUNCATE`, `DROP`)
- Changing column details

### Section 4 (Streamlining - making a relational database more efficient)
- Speeding up queries
- `CREATE INDEX`, `CREATE VIEW`, `CREATE PROCEDURE`, Transactions
- System Tables
- SQL Injection

---
## Day 2
### Section 5 (Sequel-Mart)
- Project structure
- Routing

### Section 6 (Exercises)
- Creating queries to populate the following routes:
	- Transaction *(most recent 10)*
	- Customers *(top 10 by average spend)*
	- Products *(top 10 by items sold)*
	- Summary *(6x headline cards at the top of the example web-page)*

---
## Timing and Breaks
- Morning = 09:30am - 12:30pm
- Lunch		= 12:30pm - 1:30pm
- Afternoon = 1:30pm - 4:30pm

Trying to absorb a lot of information in a short time can be exhausting. We will be aiming for 45 minutes of work followed by 15 minute breaks.

Get away from the monitor and take a real break. Pairing or not, taking breaks is important and increases productivity.


&nbsp;
## General Advice for the Bootcamp

### Breakout rooms
There is no better way to learn a craft than to get stuck in and practice, practice, practice!

The first section is all theory but after that there will be regular sets of exercises to try.  These exercises are an opportunity to split into the breakout rooms, try to answer them, then come back together to fill in any gaps in our knowledge.

### Camera Always On

Working face-to-face is powerful because we communicate with the whole body, not just our words. And we are much more attentive because any distraction like looking at the smartphone during a discussion will be detected immediately.

So would advise activate our cameras all the time.

### Whiteboard

In the absence of physical collaboration on a whiteboard, a tool like [Miro](https://miro.com/) is a reasonable alternaive. You can share the Miro board in a video conference, so that everyone puts their focus on the same section of the board.

&nbsp;
# Essential Tools

- A `GitHub` account [SignUp](https://github.com/zuto)
- (Javascript) VS Code [Download](https://code.visualstudio.com/download)
- Zoom & Slack for communications

## Optional Tools
- Docker configuration [MysqlDocker/README.md](https://github.com/MCR-Digital/apprentice-boot-camp-databases/tree/master/MysqlDocker) to provision database server for local setup
- Database Entity Relationship Modelling [LucidChart](https://www.lucidchart.com/users/login)
- (WhiteBoard) [Miro](https://miro.com/)
- (Mobbing Timer/Alert Tool) Basic Phone Alarm or [Mobster](http://mobster.cc/)

&nbsp;

# Other Software and Extensions Used
## Front-End
- HTML5
- CSS
- Javascript
- [node.js 14.5.0 / npm 6.14.5](https://nodejs.org/download/release/v14.5.0/)
- express 4.17.1
- pg-promise 10.11.0
- nodemon 2.0.12

If running locally, (make sure you set up a virtual environment in your project folder) once npm has been installed, run:
```
npm install express@4.17.1 pg-promise@10.11.0
npm install -D nodemon @2.0.12
```
Refer to `package.json` to see the full list

## Back-End
- [PostgreSQL 13.3](https://www.postgresql.org/download/)



&nbsp;
# Installation Options
# 1 Docker Compose

Three services are defined in `docker-compose.yml`:

- `database`: runs a postgres database
  - Data is persisted between runs
- `populate-database`: runs another postgres container which is only used to import the data in `/database_backups/sequel-mart-20210919-complete`
  - This only runs when the `initialise` profile is specified, so that it doesn’t have to run every time (otherwise it would try to recreate the database each time).
- `app`: runs the application within a node image
  - This requires `npm install` to be run first, as the node modules are copied into the container

## First time set up

- Run `npm install` from your command line to fetch dependencies.
- Run `docker compose --profile=initialise up --build`. This will start the database, wait five seconds, populate the database, and start the application on http://localhost:5000/. Confirm that this works, and then you can use `ctrl c` to stop docker.

## Running the app

- Run `docker compose up` to start the database and the application.
- You should now have a working application running on http://localhost:5001, and pgadmin running on http://localhost:5050 (the password for the database is `MDigital21`)
- You can stop these by hitting `ctrl-c`
- You can restart the containers using `docker compose up`

## Starting over

- To delete your data, run `docker container rm --volumes apprentice-boot-camp-databases-database-1; docker volume rm -f apprentice-boot-camp-databases_database-data`. You can now run from ‘First time set up’ again.



&nbsp;

# 2 Remote Desktop
Remote Windows instances will be provided for anyone who doesn't want to use Docker.

Just find the Remote Desktop Connection

![](images/RemoteDesktop.jpg)

Click 'Show Options' & input the remote IP, username and password.  These will be provided at the start of the course.

![](images/RemoteDesktop2.jpg)

Once connected, you'll be able to connect to PostgreSQL's pg-Admin tool to connect to the database and query the tables, and view the web project in VS Code.  Both have been pre-installed for you.

**Note:** These environments will only be available while the course is in progress. They will be terminated shortly afterwards.  If you want to use this project longer-term, you should use Docker.



&nbsp;

# Installing PostgreSQL Locally
This shouldn't be necessary if you're using Docker or an RDP connection but should you want to do this:
- Go to https://www.postgresql.org/download/
- Download the right install files for your operating system
- Click on the **installer file** (.exe)

Follow the steps to set:
1. A default location for the **Installation Directory**
2. The **components** and **add-ons** required (PostgreSQL Server, pgAdmin 4 & Command Line Tools as a minimum)
3. A default **directory** for the **databases**
4. A **superuser** user and **password** (retype to confirm)
5. A **port number** for the database server to listen (defaults to **5432**)
6. Preview your choices

7. Click *Next* to install PostgreSQL
8. Click *Finish* when it’s done

#### Loading pgAdmin
- Locate the pgAdmin app
- Once it's loaded, input the default password created in step 4 above

![](images/PostgreSQLLogin.jpg)



&nbsp;

# Cloning the Repo Locally
Open your preferred code editor and run
```
git clone https://github.com/MCR-Digital/apprentice-boot-camp-databases.git
```

&nbsp;
# Useful resources

- [Sequel-Mart course](https://github.com/MCR-Digital/apprentice-boot-camp-databases)
- [PostgreSQL v13 Documentation](https://www.postgresql.org/docs/13/index.html)
- [PostgreSQL system tables](https://www.postgresql.org/docs/9.1/catalogs.html)



&nbsp;
# Author

[Thomas Steeples (course created while working for Zuto)](https://github.com/Tom-S82/sequel-mart)



&nbsp;
# Acknowledgments
- A big thanks to all of the mentors at Manchester Digital who have helped with the final delivery of this course material, and for mentoring the students.
- Thanks also to Zuto for supporting Manchester Digital, and for allowing me the time to put this course together.
