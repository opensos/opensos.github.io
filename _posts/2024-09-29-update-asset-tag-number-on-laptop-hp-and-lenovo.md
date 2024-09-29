---
published: true
---

Update asset tag number on laptop hp probook and lenovo thinkpad

HP Probook

1. download BIOS configuration utility
2. Open command prompt with admin right
3. Run command BiosConfigUtility64.exe /GetConfig:config.txt
4. Remove all other value except Asset tracking number and update your asset number the save
5. Run BiosConfigUtility.exe /SetConfig:config.txt
6. Reboot

Lenovo thinkpad

……