#!/bin/bash
# A bash script to add protocol info directory skeleton

for arg in "$@"
do
    if [ "$arg" == "--help" ] || [ "$arg" == "-h" ]
    then
        echo "Pass in the name of the protocol whose info you want to add. e.g: ./add_new_protocol.sh rarible"
		else
			mkdir -p ./protocols/$arg
			
			mkdir -p ./protocols/$arg/resources
			mkdir -p ./protocols/$arg/resources/calls
			mkdir -p ./protocols/$arg/resources/Gov Weekly
			
			mkdir -p ./protocols/$arg/contracts
			touch ./protocols/$arg/contracts/governance.json
			touch ./protocols/$arg/contracts/token.json

			touch ./protocols/$arg/index.json
			touch ./protocols/$arg/events.json
			touch ./protocols/$arg/overview.md
			touch ./protocols/$arg/logo.png
			touch ./protocols/$arg/header.png

echo '{ 
	"cname": "",
	"name": "",
	"description": "",
	"path": "",
	"previousPaths": [],
	"folder": "",
	"type": "snapshot",
	"suffix": "",
	"coinGeckoPriceString": "",
	"tokenContractAddress": "",
	"isEnabled": false,
	"hasOnchain": false,
	"isHybrid": false,
	"hasDelegation": false,
	"snapshotSpaceName": "",
	"invalidSnapshots": [],
	"branding": {},
	"discourseForum": {},
	"safeAddress": null 
}' >> ./protocols/$arg/index.json
		fi
done

echo "Arg 1: $1"