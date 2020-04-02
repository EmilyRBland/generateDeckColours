.PHONY: sync, invalidate

default: invalidate

invalidate: sync
	aws cloudfront create-invalidation --distribution-id E38XM1BY60UR4C --paths "/*"

sync:
	aws s3 sync --exclude '.*' --exclude 'Makefile' --delete deckPicker s3://www.emilyrachaelkelly.com
