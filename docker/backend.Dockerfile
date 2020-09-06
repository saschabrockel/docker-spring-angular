FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=./build/libs/docker-spring-angular-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} backend.jar
ENTRYPOINT ["java", "-jar","/backend.jar"]