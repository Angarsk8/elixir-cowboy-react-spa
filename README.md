# Cowboy + React SPA Example

This is an example application that shows how to use Cowboy 2.0 in conjunction with React and Redux to create data driven Single Page Applications.

This project has been developed using the following technologies:

* [Elixir 1.3.4](http://elixir-lang.org/)
* [Cowboy 2.0](https://ninenines.eu/)
* [Ecto](https://github.com/elixir-ecto/ecto)
* [PostgreSQL](https://www.postgresql.org/download/)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Redux Saga](https://redux-saga.github.io/redux-saga/)

## Features

This repository contains the source code of a Todo list web application that pretends to serve as a mid size example to learn how to build modern [**SPA**](https://en.wikipedia.org/wiki/Single-page_application)s with Elixir (not Phoenix) and React. In this project you will find how to implement important features and services such as:

### Backend

* Anonymous authentication (encoding and signing user with JWT)
* RESTful JSON API (Cowboy REST handlers)
* Serve static files (Cowboy static handler)
* Authorization (decoding and verifying JWT)
* Data modeling and persistency (Ecto + PostgreSQL)

### Frontend

* Component based SPA (React)
* Application state management (Redux)
* Async operations handling (Redux Saga)

## Demo

Demo available [here](http://174.138.84.252/).

![Demo#1](http://i.imgur.com/T1shXTD.png)
![Demo#2](http://i.imgur.com/hw1gOQB.png)
![Mobile#1](http://i.imgur.com/ZGpkrsR.png)
![Mobile#2](http://i.imgur.com/mxBiIoP.png)

## Setup

To start this application locally:

1. Make sure you have installed _Elixir_, _Erlang_, _Node_, _Yarn_ and _PostgreSQL_
2. Install the Mix dependencies: `$ mix deps.get`
3. Create and migrate the development database: `$ mix ecto.setup`
4. Start the application with all its dependencies: `$ iex -S mix`
5. Install the Node packages `$ cd client/  && yarn install`
6. Start the web development server: `$ yarn start`

To build the JavaScript application for production:
* In the client directory, run `$ yarn build`

## Deployment with Docker

To run this application in production with Docker:

1. Make sure both `docker` and `docker-compose` are installed on your production server.
2. Create a `.env` file anywhere in your server:
  * Copy the information from [this](.env) file.
  * Replace the placeholders with the data you want.
3. Create a `docker-compose.yml` file in the same directory that you created the `.env` file:
  * Copy the information from [this](docker-compose.yml) file.
4. Start the services by running `$ docker-compose up -d`.

## License

[MIT](LICENSE)
