[English](/frontend/README.md) | Deutsch

# Docker-Spring-Angular

Dies ist Teil eines Beispielprojekts zur Verwendung von Angular mit Spring Boot mithilfe von Docker.
Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23 erstellt.

**Einführung:**

_Das Projekt wurde in einen clientseitigen und einen serverseitigen Teil aufgeteilt._
_Der clientseitige Teil verwendet **Angular 10**._

## Anforderungen

Sie müssen **Node.js (version 10.13 oder neuer)** installiert haben.

## Erste Schritte

Hilfe zum Einstieg in **Angular** finden Sie in der [Online-Dokumentation](https://angular.io/docs).

Führen Sie `ng serve` für einen Entwicklungsserver aus.
Um zu testen, ob es funktioniert, öffnen Sie eine Browser-Registerkarte unter [http://localhost:4200/](http://localhost:4200).
Die App wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Verwendung

Hier sind einige Beispielausschnitte, die Ihnen beim Erstellen eines Containers helfen sollen.

### docker-compose

Kompatibel mit docker-compose v3-Schemas.

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

### Erstellt mit
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Angular" width="26" height="26.36" />

### Entwickler
* Sascha Brockel

## Projekt erstellen
Führen Sie `ng build` aus, um das Projekt zu erstellen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert. Verwenden Sie die `-prod` Flag für einen Produktionsbuild des Projekts.

## Code-Gerüst

Führen Sie `ng generate component component-name` aus, um eine neue Komponente zu generieren. Sie können auch `ng generate directive|pipe|service|class|guard|interface|enum|module` für alle anderen Zwecke verwende.

## Komponententests ausführen

Führen Sie `ng test` aus, um die Komponententests durch [Karma](https://karma-runner.github.io) auszuführen.

## End-to-End-Tests ausführen

Führen Sie `ng e2e` aus, um die End-to-End-Tests durch [Protractor](http://www.protractortest.org/) auszuführen.

## Weitere Hilfe

Um weitere Hilfe zur Angular CLI zu erhalten, verwenden Sie `ng help` oder lesen Sie die [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
