#!/bin/bash
#
# Basic deployment script. For now the script assumes that your git project is
# in a folder relative to the home directory and has the same name as the
# deployment server (domain name) you connect to.
#
# Set the DEPLOY_KEY environment variable if you want to specify an SSH key to
# connect with.

REMOTE_HOST='bikeabout.nl'
REMOTE_PATH='bikeabout.nl'

GIT_REMOTE=$1
GIT_BRANCH=$2

git push $GIT_REMOTE $GIT_BRANCH
ssh -i $DEPLOY_KEY ec2-user@$REMOTE_HOST "cd $REMOTE_PATH; git pull $GIT_REMOTE $GIT_BRANCH;"
