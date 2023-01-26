#!/bin/sh

./build.sh && python3 -m http.server 8000 --directory ./build
