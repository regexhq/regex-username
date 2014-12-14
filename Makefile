SRC = index.js

include node_modules/make-lint/index.mk

LINT_CONFIG = .eslintrc
TESTS = test.js

test: lint
	@NODE_ENV=test ./node_modules/.bin/mocha \
		$(TESTS) \
		--bail

test-cov:
	@NODE_ENV=test node \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		-- -u exports \
		$(TESTS) \
		--bail

test-travis:
	@NODE_ENV=test node \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		--report lcovonly \
		-- -u exports \
		$(TESTS) \
		--bail

.PHONY: test
