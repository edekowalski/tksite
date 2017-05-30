[applicationContext = Production*]
  page {
    includeCSS {
      styles = {$path.public}/Styles/Styles.min.css
    }

    includeJSFooter {
      scripts = {$path.public}/JavaScript/site.min.js
    }
  }
[end]

[applicationContext = Development*]
  page {
    includeCSS {
      styles = {$path.public}/Styles/Styles.css
    }

    includeJSFooter {
      scripts = {$path.public}/JavaScript/site.js
    }
  }
[end]

page {
  includeCSS {
    prism = {$path.public}/Vendor/Prism/prism.min.css
  }

  includeJSFooter {
    jslibs = {$path.public}/JavaScript/site-libs.min.js
      jslibs.forceOnTop = true
    prism = {$path.public}/Vendor/Prism/prism.min.js
    prism-typoscript = {$path.public}/Vendor/Prism/prism-typoscript.min.js
  }
}
