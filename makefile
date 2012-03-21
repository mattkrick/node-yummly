# Makefile tasks for Yummly API

VERSION = $(shell node --print --eval "require('package.json').version")
REPORTER = spec
SLOW = 75
TIMEOUT = 3000

test:
	@node_modules/.bin/mocha --colors --ui bdd --globals expect --require test --reporter $(REPORTER) --slow $(SLOW) --timeout $(TIMEOUT)

version:
	@echo ${VERSION}

.PHONY: test version
