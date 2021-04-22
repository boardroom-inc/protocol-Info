#!/bin/bash
# A bash script to add protocol info directory skeleton

for arg in "$@"
do
    if [ "$arg" == "--help" ] || [ "$arg" == "-h" ]
    then
        echo "Pass in the name of the protocol whose info you want to add. e.g: ./add_new_protocol.sh rarible"
		else
			mkdir -p ./$arg
			
			mkdir -p ./$arg/resources
			mkdir -p ./$arg/resources/calls
			mkdir -p ./$arg/resources/Gov Weekly
			
			mkdir -p ./$arg/contracts
			touch ./$arg/contracts/governance.json
			touch ./$arg/contracts/token.json

			touch ./$arg/index.json
			touch ./$arg/events.json
			touch ./$arg/overview.md
			touch ./$arg/logo.png
			touch ./$arg/header.png
		fi
done

echo "Arg 1: $1"
