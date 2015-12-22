<?php
$docroot = $_SERVER[DOCUMENT_ROOT];

require $docroot.'/code/classes/'."Database.php";
require $docroot.'/code/classes/'."API.php";
require $docroot.'/code/classes/'."Endpoints.php";

$api = new Endpoint( $_REQUEST['request'] );
echo $api->processAPI();