#!/bin/bash

# CHECK GOOGLE_MAPS_KEY ENV VARIABLE EXIST 
[[ -z "${GOOGLE_MAPS_KEY}" ]] && GoogleMapsKey='default' || GoogleMapsKey="${GOOGLE_MAPS_KEY}"

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "MacOS $OSTYPE detected..."
    sed -i '' -e "s/__GOOGLE_MAPS_KEY__/${GoogleMapsKey}/g" ./index.html
else
    echo "$OSTYPE detected..."
    sed -i -e "s/__GOOGLE_MAPS_KEY__/${GoogleMapsKey}/g" ./index.html
fi