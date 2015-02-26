#!/bin/bash
#
# Basic database backup and restore script.

mongodump --db bikeabout ~/dump

mongorestore --db bikeabout ~/dump
#only one collection:
mongorestore --db bikeabout ~/dump --collection hits dump2012_06_21_14_32_36/analytics/hits.bson