#!/bin/bash
# A bash script to add protocol info directory skeleton

if [ "$arg" == "--help" ] || [ "$arg" == "-h" ]
then
		echo "Pass in the name of the protocol whose info you want to add. e.g: ./add_new_protocol.sh rarible"
else
	mkdir -p ./protocols/$1
	
	mkdir -p ./protocols/$1/resources
	mkdir -p ./protocols/$1/resources
	mkdir -p ./protocols/$1/resources/calls
	mkdir -p ./protocols/$1/resources/Gov Weekly
	
	touch ./protocols/$1/index.json
	touch ./protocols/$1/events.json
	touch ./protocols/$1/overview.md

printf '{ 
	"cname": "'"$1"'",
	"description": "",
	"path": "'"$1"'",
	"isEnabled": false,
}' >| ./protocols/$1/index.json
		fi

echo "Arg 1: $1"
