#!/bin/bash

# Check if there are any arguments supplied
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through all arguments passed to the script
    for arg in "$@"; do
        # Create a directory with 'ex' prefix
        mkdir "ex$arg"
    done
fi