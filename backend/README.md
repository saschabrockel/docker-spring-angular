English | [Deutsch](/backend/README-DE.md)

# Docker-Spring-Angular

This is part of an sample project how to use Angular with Spring Boot using Docker.

**Introduction:**

_The project has been split into a client-side and a server-side part._
_This server-side part uses **Java 8**, **Gradle** & **Spring Boot**._

## Database

It uses a MySQL database (for now). It can be changed easily in the `application.properties` for any other database.

## Requirements

You need to have **Java 8** & **MySQL** installed.

## Getting Started

For help getting started with **Spring Boot**, view their online [documentation](https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/).

To test that it works, open a browser tab at [http://localhost:8080](http://localhost:8080).

## Looking for something in particular?

|Spring Boot Configuration | Class or Java property files  |
|--------------------------|---|
|The Main Class | [DockerSpringAngularApplication](https://github.com/saschabrockel/docker-spring-angular/blob/master/backend/src/main/java/com/brockel/dockerspringangular/DockerSpringAngularApplication.java) |
|Properties Files | [application.properties](https://github.com/saschabrockel/docker-spring-angular/blob/master/backend/src/main/resources/application.properties) | 
|CORS Config | [WebSecurityConfig](https://github.com/saschabrockel/docker-spring-angular/blob/master/backend/src/main/java/com/brockel/dockerspringangular/configuration/WebSecurityConfig.java) |

## Usage

Here are some example snippets to help you get started creating a container.


### docker-compose

Compatible with docker-compose v3 schemas.

```
version: "3"
services:
  spring-boot:
    container_name: spring-boot
    ports:
      - 8080:8080
    image: saschabrockel/docker-spring-angular:backend
    environment:
      spring.datasource.url: jdbc:mysql://db:3306/dockerSpringAngular
      spring.datasource.username: brockel
      spring.datasource.password: develop
      angular.service.base-path: http://localhost
      TZ: Europe/Berlin
    depends_on:
      - db
    restart: unless-stopped

  db:
    container_name: db
    ports:
      - 3306:3306
    image: mysql:8.0.21
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: dockerSpringAngular
      MYSQL_USER: brockel
      MYSQL_PASSWORD: develop
    cap_add:
	  - SYS_NICE
    restart: unless-stopped
```
Please don't forget that you need a running database instance of [MySQL](https://hub.docker.com/_/mysql)! Otherwise it won't work.


### Built with
<img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" alt="Spring Boot" width="26" height="26.36" />

### Developer
* Sascha Brockel
