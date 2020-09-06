[English](/backend/README.md) | Deutsch

# Docker-Spring-Angular

Dies ist Teil eines Beispielprojekts zur Verwendung von Angular mit Spring Boot mithilfe von Docker.

**Einführung:**

_Das Projekt wurde in einen clientseitigen und einen serverseitigen Teil aufgeteilt._
_Der serverseitige Teil verwendet **Java 8**, **Gradle** und **Spring Boot**._

## Datenbank

Es verwendet eine MySQL-Datenbank (vorerst). Sie kann einfach in der `application.properties` auf jede andere Datenbank geändert werden.

## Anforderungen

Sie müssen **Java 8** & **MySQL** installiert haben.

## Erste Schritte

Hilfe zum Einstieg in **Spring Boot** finden Sie in der [Online-Dokumentation](https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/).

Um zu testen, ob es funktioniert, öffnen Sie eine Browser-Registerkarte unter [http://localhost:8080](http://localhost:8080).

## Suchen Sie etwas Bestimmtes?

|Spring Boot Configuration | Class or Java property files  |
|--------------------------|---|
|Die Hauptklasse | [DockerSpringAngularApplication](https://github.com/saschabrockel/docker-spring-angular/blob/master/backend/src/main/java/com/brockel/dockerspringangular/DockerSpringAngularApplication.java) |
|Eigenschaftendatei | [application.properties](https://github.com/saschabrockel/docker-spring-angular/blob/master/backend/src/main/resources/application.properties) | 
|CORS Konfig | [WebSecurityConfig](https://github.com/saschabrockel/docker-spring-angular/blob/master/backend/src/main/java/com/brockel/dockerspringangular/configuration/WebSecurityConfig.java) |

## Verwendung

Hier sind einige Beispielausschnitte, die Ihnen beim Erstellen eines Containers helfen sollen.


### docker-compose

Kompatibel mit docker-compose v3-Schemas.

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
Bitte vergessen Sie nicht, dass Sie eine laufende Datenbankinstanz von [MySQL](https://hub.docker.com/_/mysql) benötigen! Ansonsten funktioniert es nicht.


### Erstellt mit
<img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" alt="Spring Boot" width="26" height="26.36" />

### Entwickler
* Sascha Brockel
