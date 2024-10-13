.PHONY: update

update:
	git add .
	git commit -m "Update site"
	git push origin source
