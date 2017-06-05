lib.backendLayout = TEXT
lib.backendLayout {
  data = pagelayout
  split {
    token = pagets__
  }
}

page {
  10 = FLUIDTEMPLATE
  10 {
    templateName < lib.backendLayout

    layoutRootPaths {
      10 = {$path.private}/Layouts/Page
    }

    partialRootPaths {
      10 = {$path.private}/Partials/Page
    }

    templateRootPaths {
      10 = {$path.private}/Templates/Page
    }

    ##########################
    ### DATA PREPROCESSING ###
    ##########################
    dataProcessing {
      10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      10 {
        special = directory
        special.value = {$template.pidRoot}
        levels = 6
        includeSpacer = 1
        as = menuMain
      }

      20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      20 {
        special = list
        special.value = {$template.pidMeta}
        levels = 1
        as = menuMeta
      }

      30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      30 {
        levels = 4
        entryLevel = 1
        expandAll = 0
        includeSpacer = 1
        as = menuSub
      }

      40 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      40 {
        special = language
        special.value = {$template.languages}
        as = menuLanguage
      }

      50 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      50 {
        special = rootline
        special.range = 0|-1
        includeNotInMenu = 1
        as = menuBreadcrumb
      }
    }

    settings {
      pidRoot = {$template.pidRoot}
    }

    variables {
    }
  }

  bodyTagCObject = COA
  bodyTagCObject {
    stdWrap.wrap = <body | >
    stdWrap.case = lower

    //Classes
    10 = COA
    10 {
      stdWrap.noTrimWrap = | class="|" |

      #Add name of the backend-layout
      10 = TEXT
      10 {
        value < lib.backendLayout
        wrap = layout-|
        noTrimWrap = || |
      }

      #Add name of the layout
      20 = TEXT
      20 {
        data = levelfield:-2, layout, slide
        override.field = layout
        wrap = theme-|
        noTrimWrap = || |
        required = 1
      }

      # Add language
      30 = TEXT
      30 {
        wrap = lang-|
        noTrimWrap = || |
        required = 1
      }

      # Add page UID
      40 = TEXT
      40 {
        field = alias // uid
        noTrimWrap = |page-||
      }
    }

    //Style
    #    20 = COA
    #    20 {
    #      stdWrap.noTrimWrap = | style="|"|
    #
    #      10= FILES
    #      10 {
    #        references.data = levelmedia:-1,slide
    #        references.listNum = 0
    #
    #        renderObj.wrap =  background-image:url('|');
    #        renderObj = TEXT
    #        renderObj.data = file:current:publicUrl
    #      }
    #
    #      20 = TEXT
    #      20.value = background-repeat: no-repeat;
    #      20.noTrimWrap = | ||
    #    }
  }
}
