#!/bin/sh
gcloud compute disks create mongo-data --size 200GB --zone europe-west1-c --type pd-standard
gcloud compute instances create meteor --zone europe-west1-c --machine-type n1-standard-1 --image ubuntu-14-04 --tags http-server --scopes storage-ro --disk "name=mongo-data" "mode=rw" "boot=no"
