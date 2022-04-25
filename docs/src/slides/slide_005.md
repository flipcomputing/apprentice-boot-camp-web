---
layout: 'base.njk'
slide_number: 5
slide_prev: 'slide_004/'
slide_next: 'slide_006/'
section_title: 'Setting Up'
slide_title: 'Setting up the Project'
theme: 'theme_001'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Required Downloads
- Make sure the following has been installed:
    - **Docker Desktop** for [Windows](https://docs.docker.com/desktop/windows/install/) or [Mac](https://docs.docker.com/desktop/mac/install/)
    - A code editor (e.g. [VS Code](https://code.visualstudio.com/download))

#### Project Set Up
- Add a folder somewhere on your computer.  This will store the project.
- Open a terminal window (if using VS Code, the shortcut is `ctrl`+`'`).
- `cd <file path>` to the folder you've just created
- Run `git clone https://github.com/MCR-Digital/apprentice-boot-camp-databases.git`
    - If successful, you should be able to see the files in the [course's Github repo](https://github.com/MCR-Digital/apprentice-boot-camp-databases)
- Run `cd .\apprentice-boot-camp-databases\` to access the root folder

#### Docker Desktop
- Open Docker Desktop
- Check for a folder called `apprentice-boot-camp-databases`

<hr />

- If this Docker folder **does not exist**:
    - In your terminal, run `./setup.sh` (if using a Mac) or `./setup.bat` (if using Windows)

<hr />

- If this Docker folder **does exist** but is greyed out:
    - In your terminal, run `./run.sh` (if using a Mac) or `./run.bat` (if using Windows)

<hr />

- After about 30 seconds, check the services are running as per screenshot 1
- You can stop the services at any time by hitting `ctrl`+`c` or `cmd`+`c` on the terminal session and terminating the batch job if prompted.
- Stopping the services will not remove them from Docker Desktop.
- They can be restarted with `./run.sh` or `./run.bat` as above.

#### Project Locations
- Sequel-Mart frontend should be on [http://localhost:5001/](http://localhost:5001/)
- pgAdmin 4 (PostgreSQL's Managed Database Platform) should be on [http://localhost:5050/](http://localhost:5050/)
- We will eventually populate the Sequel-Mart front-end with data from the PostgreSQL database

#### Accessing PostgreSQL
- In pgAdmin, expand `Servers` on the top left
- It will prompt you for a password.  This is `MDigital21`
- You should now see the server group (sequel-mart) and an expandable list called Databases.
- Expand `Databases` > `sequel-mart` > `Schemas` > `sequel-mart-schema` > `tables`
- There should be 6 tables:
    - `Customers`, `Dates`, `Products`, `Sales_Detail`, `Sales_Header` and `Stores`


#### Tearing Down the Project
- <span>When you no longer need the project on your machine:</span>
- <span>In your terminal, run `./teardown.sh` (if using a Mac) or `./teardown.bat` (if using Windows)</span>
- <span>They can be recreated with `./setup.sh` or `./setup.bat` as above if needed.</span>
</section>

<section class="slide__images">
    <caption>1. Docker Desktop (setup complete)</caption>
    <img src="{{ '../../images/001_Docker_Setup.png' | url }}" />
    <caption>2. Sequel-Mart web page</caption>
    <img src="{{ '../../images/001_SequelMart_Setup.png' | url }}" />
    <caption>3. PostgreSQL on first load</caption>
    <img src="{{ '../../images/001_PostgreSQL_Setup.png' | url }}" />
</section>