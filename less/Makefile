

CSS := ../css/creative.css

$(CSS) : creative.less mixins.less variables.less
	lessc creative.less > $(CSS)
	minify $(CSS)
