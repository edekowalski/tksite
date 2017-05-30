path {
  public = typo3conf/ext/tksite/Resources/Public
  private = typo3conf/ext/tksite/Resources/Private
  config = typo3conf/ext/tksite/Configuration
}

styles.content {
  #  defaultHeaderType = 2
  #  shortcut.tables = tt_content,tt_address,tt_news,tx_news_domain_model_news

    allowTags:= addToList(iframe)

  textmedia {
    maxW = 610
    maxWInText = 300
    columnSpacing = 8
    rowSpacing = 8
    textMargin = 16

    image{
      small = 480
      medium = 960
      large = 1280
    }

    borderColor = #000
    borderWidth = 1
    borderPadding = 0

    linkWrap {
      width = 1200m
      height = 1200
      newWindow = 0
      lightboxEnabled = 1
      lightboxCssClass = lightbox
      lightboxDataAttribute = lb-{current}
    }
  }

  links {
    target =
    extTarget = _blank
    keep = path
  }
}
