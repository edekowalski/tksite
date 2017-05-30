<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

//hide Thumbnails in List
$GLOBALS['TCA']['tt_content']['ctrl']['thumbnail'] = '';