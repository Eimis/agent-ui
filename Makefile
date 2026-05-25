.PHONY: dev install help

help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "  dev      Start the dev server (port 3000)"
	@echo "  install  Install dependencies"

dev:
	npm run dev

install:
	npm install
