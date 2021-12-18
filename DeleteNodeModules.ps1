<#
This will delete the node_modules folder from all subprojects
#>

$nodeModuleFolders=Get-ChildItem -Filter "node_modules" -Recurse -Directory
$nodeModuleFolders | Remove-Item -Force -Recurse -Verbose

