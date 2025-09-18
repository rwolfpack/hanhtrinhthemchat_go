include .env
export

.PHONY:  run-win run-linux build-win build-linux server

help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

server: 
	go run main.go
build-win:
	GOOS=windows GOARCH=amd64 go build -o webhtml.exe main.go
build-mac-intel:
	GOOS=darwin GOARCH=amd64 go build -o webhtml_mac_intel main.go
build-mac:
	GOOS=darwin GOARCH=arm64 go build -o webhtml_mac main.go
build-linux:
	GOOS=linux GOARCH=amd64 go build -o webhtml main.go
run:
	./server.exe
run-mac-intel:
	./server_mac_intel
run-mac:
	./server_mac
run-linux:
	./server