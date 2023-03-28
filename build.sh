#!/bin/sh

rm -rf build
mkdir build
mkdir build/news
mkdir build/congress
cp -r src/. build
cp -r assets/. build
newsCount=$(find pages/news -type f | wc -l | xargs)

for file in $(find pages -type f -name '*.md'); do
	file_no_md="${file%.md}"
	file_no_pages="${file_no_md#pages/}"
	output="build/$file_no_pages.html"

	pandoc "${file}" -s -o "$output" --template src/html.template --metadata pagetitle="Lancaster Chess Club" --metadata newsCount="$newsCount"
done
