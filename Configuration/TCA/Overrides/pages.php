<?php
defined('TYPO3_MODE') or die();

// Add pageTSconfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'tksite',
    'Configuration/PageTS/Page.tsconfig',
    'Template Site'
);
