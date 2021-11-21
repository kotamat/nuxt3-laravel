#!/usr/bin/env sh

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i /local/back/storage/app/all.json -g typescript-axios -o /local/front/spec --additional-properties=useSingleRequestParameter=true
