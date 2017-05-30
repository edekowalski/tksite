config {

    # en-/ disable cache-headers
    sendCacheHeaders = 1

    # en-/ disable html comments
#    disablePrefixComment = 1

    tx_realurl_enable = {$template.realurl}
    absRefPrefix = /

    # en- / disable default css (_CSS_DEFAULT_STYLE config of extensions) -> since TYPO3 v4.6
#    removeDefaultCss = 0
#    removePageCss = 0

    # en-/ disable default js -> be careful, it's needed for Spamprotect
    //external
    removeDefaultJS = external
#    moveJsFromHeaderToFooter = 1

    # en-/ disable css/js concatenation
    concatenateCss = 1
    concatenateJs = 1

    # en-/ disable css/js compression
    compressJs = 1
    compressCss = 1

    # en-/ disable default title-tag generation -> e.g. for custom page title
    # 0: default, 1: only sitename from template record, 2: no <title> tag printed at all (disabled)
    noPageTitle = 1

    //Prtect mail addresses
    spamProtectEmailAddresses = -2
    spamProtectEmailAddresses_atSubst = (at)
    #spamProtectEmailAddresses_lastDotSubst = _
}

[applicationContext = Development*]
    config {
        no_cache = 1
        sendCacheHeaders = 0
        contentObjectExceptionHandler = 0

        # en-/ disable css/js concatenation
        concatenateCss = 0
        concatenateJs = 0

        # en-/ disable css/js compression
        compressJs = 0
        compressCss = 0
    }
[end]

page = PAGE
