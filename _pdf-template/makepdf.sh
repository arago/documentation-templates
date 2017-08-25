#!/bin/bash

asciidoctor-pdf \
--trace \
-r asciidoctor-diagram \
-a toc \
-a icons=font \
-a source-highlighter=rouge \
-a pdf-style=arago \
-a pdf-stylesdir=. \
-a pdf-fontsdir=../_fonts/ \
$1
