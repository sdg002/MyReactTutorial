@echo off
rem This BAT file will copy over contents from each of the React projects into the static web site
rem Whent to use this? You have made changes to a React project and want to publish the changes to local static site to examine


set subfolder=simple-clock-high-order
rmdir %subfolder% /s /q
robocopy ..\%subfolder%\build .\%subfolder%\ /s



set subfolder=BootStrapExperiments
rmdir %subfolder% /s /q
robocopy ..\%subfolder%\build .\%subfolder%\ /s