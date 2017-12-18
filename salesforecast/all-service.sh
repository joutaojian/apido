#!/bin/sh

cd "$(dirname "$0")"
SCRIPT_FILE_NAME=$0
SCRIPT_FILE_NAME=${SCRIPT_FILE_NAME##*/}

echo ${SCRIPT_FILE_NAME}

case "$1" in
  start)
    echo "Starting all service..."
	for file in  $(find -name run.sh)
	do
			./${file} start
	done
    echo "All service booted."
   ;;
  restart)
    echo "restart all service ..."
	for file in  $(find -name run.sh)
	do
			./${file} restart
	done
    echo "all service is restart"
   ;;
  stop)
    echo "Stopping all service..."
	for file in  $(find -name run.sh)
	do
			./${file} stop
	done
    echo "all service is stopped."
    ;;
  update)
    echo "updating all service..."
	for file in  $(find -name run.sh)
	do
			./${file} update
	done
    echo "all service is updated."
    ;;
  *)
    # Print help, don't advertise halt, it's nasty
    echo "Usage: $0 {start|stop|restart|update}" 1>&2
    exit 1
    ;;
esac
