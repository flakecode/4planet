#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)
SERVICE_NAME=$(get_env BACKEND_SERVICE_NAME)
SERVICE_SUBDOMAIN=$(get_env BACKEND_SERVICE_SUBDOMAIN)
DOCKER_HUB_SERVICE_REPOSITORY=$(get_env BACKEND_DOCKER_HUB_REPOSITORY_NAME)
BACKEND_SERVICE_SUBDOMAIN=$(get_env BACKEND_SERVICE_SUBDOMAIN)
DOCKER_HUB_USERNAME=$(get_env DOCKER_HUB_USERNAME)
DOCKER_HUB_PASSWORD=$(get_env DOCKER_HUB_PASSWORD)
PORTAINER_USERNAME=$(get_env PORTAINER_USERNAME)
PORTAINER_PASSWORD=$(get_env PORTAINER_PASSWORD)
DOCKER_HUB_URL=$(get_env DOCKER_HUB_URL)
BACKEND_DOCKER_HUB_REPOSITORY_NAME=$(get_env BACKEND_DOCKER_HUB_REPOSITORY_NAME)

if [ -z "$BACKEND_SERVICE_SUBDOMAIN" ]
then
    BACKEND_URL=$DOMAIN
else
    BACKEND_URL=$BACKEND_SERVICE_SUBDOMAIN.$DOMAIN
fi

if [ "$1" == "up" ]
then
    ./create_backend_env.sh && \
    ansible-playbook create_backend.yaml \
        -e "DOMAIN=$DOMAIN \
            SERVICE_NAME=$SERVICE_NAME \
            SERVICE_URL=$BACKEND_URL \
            DOCKER_HUB_SERVICE_REPOSITORY=$DOCKER_HUB_SERVICE_REPOSITORY \
            DOCKER_HUB_URL=$DOCKER_HUB_URL \
            DOCKER_HUB_USERNAME=$DOCKER_HUB_USERNAME \
            DOCKER_HUB_PASSWORD=$DOCKER_HUB_PASSWORD \
            PORTAINER_USERNAME=$PORTAINER_USERNAME \
            PORTAINER_PASSWORD=$PORTAINER_PASSWORD \
            BACKEND_DOCKER_HUB_REPOSITORY_NAME=$BACKEND_DOCKER_HUB_REPOSITORY_NAME"
else
    ansible-playbook delete_backend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME"
fi