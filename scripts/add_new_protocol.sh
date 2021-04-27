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
	
	mkdir -p ./protocols/$1/contracts
	touch ./protocols/$1/contracts/governance.json
	touch ./protocols/$1/contracts/token.json

	touch ./protocols/$1/index.json
	touch ./protocols/$1/events.json
	touch ./protocols/$1/overview.md
	touch ./protocols/$1/logo.png
	touch ./protocols/$1/header.png

printf '{ 
	"cname": "'"$1"'",
	"name": "'"$4"''"$5"''"$6"'",
	"description": "",
	"path": "'"$1"'",
	"previousPaths": [],
	"folder": "'"$1"'",
	"type": "snapshot",
	"suffix": "'"$3"'",
	"coinGeckoPriceString": "",
	"tokenContractAddress": "'"$2"'",
	"isEnabled": false,
	"hasOnchain": false,
	"claim": {
		"isClaimed": false,
		"claimer": "",
		"signature": ""
	},
	"isHybrid": false,
	"hasDelegation": false,
	"snapshotSpaceName": "'"$1"'",
	"invalidSnapshots": [],
	"branding": {
		"primaryColor": "",
		"accentColor": ""
	},
	"discourseForum": {
		"url": "",
		"categoryId": ""
	},
	"safeAddress": null 
}' >| ./protocols/$1/index.json
		fi

echo "Arg 1: $1"