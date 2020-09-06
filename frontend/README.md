English | [Deutsch](/frontend/README-DE.md)

# Docker-Spring-Angular

This is part of an sample project how to use Angular with Spring Boot using Docker.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

**Introduction:**

_The project has been split into a client-side and a server-side part._
_This client-side part uses **Angular 10**._

## Requirements

You need to have **Node.js (version 10.13 or newer)** installed.

## Getting Started

For help getting started with Angular, view their online [documentation](https://angular.io/docs).

Run `ng serve` for a dev server.
To test that it works, open a browser tab at [http://localhost:4200/](http://localhost:4200).
The app will automatically reload if you change any of the source files.

## Usage

Here are some example snippets to help you get started creating a container.

### docker-compose

Compatible with docker-compose v3 schemas.

```
version: "3"
services:
  angular:
    container_name: angular
    ports:
      - 80:80
    image: saschabrockel/docker-spring-angular:frontend
    restart: unless-stopped
    environment:
      API_URL: http://localhost:8080
      TZ: Europe/Berlin
```

### Built with
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Angular" width="26" height="26.36" />

### Developer
* Sascha Brockel

## Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
