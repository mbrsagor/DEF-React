### Django RDRF and React.JS
> CODING TEST - Full Stack Software Engineer.

#### Project setup & dependencies

- Python 3.8.5
- Django 3.1.2
- Postgres 12.0
- NodeJS v14.4.0
- NPM 6.14.8

The following steps will walk you thru installation on a Mac. Linux should be similar.
It's also possible to develop on a windows machine, but I have not documented the steps.
If you've developed django-react apps on windows, you should have little problem getting
up and running.


### Create Database

Create the database by running the following commands in a psql shell. If you're using
Postgres.app, click the Postgres.app icon in your toolbar and select "Open psql".

```
create database "rferadb";
create user "macair";
ALTER ROLE "macair" WITH PASSWORD 'p12345678';
ALTER USER naciar CREATEDB;
CREATE EXTENSION postgis;
```
If you have use different information database you may change the previous information form Database config directory and `db_development.py` file.



### Setup Django Server (Mac)

We're using python3 instead of python2.x. If you don't have python3 installed,
install [Homebrew](http://brew.sh), then…

```
brew install python3.8
```
Assuming you've cloned the repository, open Terminal which has `manage.py` file `cd ~/your/path/to/rferaBackend`.


Create a python virtual environment:

```bash
pyvenv-3.8 venv
```

Activate it:

```bash
source venv/bin/activate
```
Install the python dependencies which includes django and other libraries and run the app locally.

```
pip3 install -r requirements.txt
./manage.py migrate
./manage.py runserver
```


### Build frontend and run locally
```
cd rfera-frontenda
npm install
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
[http://localhost:3000/add-device](http://localhost:3000/add-device)