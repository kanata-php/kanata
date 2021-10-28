#!/usr/bin/env bash

WORK_DIR=$1
if [ ! -n "${WORK_DIR}" ] ;then
    WORK_DIR="."
fi

echo "Starting inotifywait..."
LOCKING=0

inotifywait --event modify --event create --event move --event delete -mrq   ${WORK_DIR}  | while read file

do
    if [[ ! ${file} =~ .php$ ]] ;then
        continue
    fi
    if [ ${LOCKING} -eq 1 ] ;then
        echo "Reloading, skipped."
        continue
    fi
    echo "File ${file} has been modified."
    LOCKING=1
    kill -9 $(cat ./http-server-pid)
    kill -9 $(cat ./ws-server-pid)
    rm -f ./http-server-pid
    rm -f ./ws-server-pid
    LOCKING=0
done
exit 0