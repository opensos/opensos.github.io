---
title: How To Install Autocad 2007 On Windows 10
date: 2020-01-10 16:11
---

##### Install .NET Framework using Windows 10 Installation media

First enable Power Shell

Type Gpedit.msc

Go to ***User Configuration\Administrative Templates\System***

Click Disable

1.Create a temporary folder called Temp under C: directory. The complete address of the directory would be C:\Temp.

2.Mount Windows 10 Installation Media using DAEMON Tools or Virtual CloneDrive.

3.If you have a Bootable USB then simply plug it and browse to the drive letter.

4.Open Sources folder then copy the SxS folder inside it.

5.Copy the sxs folder to C:\Temp directory.

Type powershell in Windows Search and right-click on PowerShell then select Run as administrator.

Next, type the following command into powershell window:
```
dism.exe /online /enable-feature /featurename:NetFX3 /All /Source:c:\temp\sxs /LimitAccess
```