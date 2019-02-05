# Lombok Dev Meetup 5th

# DEMO "Getting started with docker"

## Let's Go ....


```
    docker image ls
    
    docker image ls -a

    -> `this command will show all of your running image`
    -> `by adding -a that's mean your command will showing all of your image`
    
    docker image container ls

    docker image container ls -a

    -> `this command will show all of your running container` 
    -> `by adding -a that's mean your command will showing all of your container`
        
```

```
    docker build -t ldev/dockerize .
        
    -> `this command will bulild our app to image`
```
```
    docker run -it --name ldev -p 4000:4000 ldev/dockerize
  
    -> `this command will running your image to container`
```

```
    docker run -it --name ldev -p 4000:4000 ldev/dockerize
  
    -> `by adding -d, that's mean your container will ne running on background`
```

