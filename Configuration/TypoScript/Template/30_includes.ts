[applicationContext = Production*]
    page {
        includeCSS {
            ckeCode = EXT:rte_ckeditor/Resources/Public/JavaScript/Contrib/plugins/codesnippet/lib/highlight/styles/monokai_sublime.css
            styles = {$path.public}/Styles/Styles.min.css
        }

        includeJSFooterlibs {
            jslibs = {$path.public}/JavaScript/site-libs.min.js
            jslibs.forceOnTop = true
        }

        includeJSFooter {
            ckeCode = EXT:rte_ckeditor/Resources/Public/JavaScript/Contrib/plugins/codesnippet/lib/highlight/highlight.pack.js
            scripts = {$path.public}/JavaScript/site.min.js
        }
    }
[end]

[applicationContext = Development*]
    page {
        includeCSS {
            ckeCode = EXT:rte_ckeditor/Resources/Public/JavaScript/Contrib/plugins/codesnippet/lib/highlight/styles/monokai_sublime.css
            styles = {$path.public}/Styles/Styles.css
        }

        includeJSFooterlibs {
            jslibs = {$path.public}/JavaScript/site-libs.js
            jslibs.forceOnTop = true
        }

        includeJSFooter {
            ckeCode = EXT:rte_ckeditor/Resources/Public/JavaScript/Contrib/plugins/codesnippet/lib/highlight/highlight.pack.js
            scripts = {$path.public}/JavaScript/site.js
        }
    }
[end]
