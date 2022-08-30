FROM adoptopenjdk/openjdk11-openj9:alpine-slim
VOLUME /tmp
EXPOSE 8080
COPY ./applications/app-service/build/libs/test-software-engineer.jar /usr/app/
WORKDIR /usr/app
RUN sh -c 'touch test-software-engineer.jar'
# Replace with a non-root user to avoid running the container with excessive privileges
ENTRYPOINT ["java", "-jar", "test-software-engineer.jar" ]
