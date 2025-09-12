#!/bin/bash

# Check if there are any arguments
if [ -z "$1" ]; then
    echo "No arguments supplied"
else
    # Loop through the first three arguments
    for i in $(seq 1 3); do
        # Check if the argument exists
        if [ ! -z "${!i}" ]; then
            echo "${!i}"
        fi
    done
fi   