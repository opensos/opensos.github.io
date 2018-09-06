---
title: Cara Kejam Install Printer Resit SHTB Jika Menggunakan Kabel Usb To IEEE
date: 2015-11-21 21:11
---

1) Add printer
- port usb
- Share this printer as sliptmu

2) Create file **c:\sliptmu.bat**
```
@echo off

timeout /t 30 /nobreak
net use lpt1 \\PC-NAME\sliptmu
exit
```

3) Create file **c:\sliptmu.vbs**
```
Set WshShell = CreateObject("WScript.Shell" ) 
WshShell.Run chr(34) & "C:\sliptmu.bat" & Chr(34), 0 
Set WshShell = Nothing 

```

4) Create autostart sliptmu
```
@echo off
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" /f /v "StartLPT1" /t REG_SZ /d "c:\sliptmu.vbs"
```
- save as **sliptmu.reg** kemudian run


Restart pc, done!
