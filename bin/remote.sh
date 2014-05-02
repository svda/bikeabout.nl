#!/bin/bash

REMOTE_HOST='bikeabout.nl'
REMOTE_PATH='bikeabout.nl'

ssh -i $DEPLOY_KEY ec2-user@$REMOTE_HOST
