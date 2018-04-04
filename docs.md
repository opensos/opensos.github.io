---
title: Docs
permalink: /docs/
---

[Windows](#windows)
[Sptb](#sptb)


<a name="windows"></a>
### Windows 7 install : no drive were found or Acer s6 series get error please boot this recovery disk using legacy bios

After you get past the language selection, select Repair, open Command Prompt and type the following commands (pressing Enter after each one):

```
diskpart

list disk

select disk <number>

clean
```

* * *

### Noisy processor fan

First try clean fan with blower. If it still there, change **_power supply unit_**.

* * *
<a name="sptb"></a>
### error install sagem driver


http://support.mccpilotlog.net/support/solutions/articles/15345-windows-pc-error-1723-there-is-a-problem-with-this-windows-installer-package-a-dll-required-fo

* * *

### THE MYSTERY OF THE WINDOWS STATIC IP THAT WON’T STICK

 I made a backup of the registry (by exporting it) before making any changes and then navigated to the registry key located at HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Network. There I deleted the binary value called Config and restarted. This allowed me to set a static IP address and have the setting maintained as it should be.
 
* * *

### Error Permission Denied When Install Oracle On Windows 10

 1. Copy folder oracle forms from cd to pc.
 
 2. Remove Read Only then open file **\Forms & Reports 6i Rel 2\win32\ssf\6_0_0_0_0\install\SSF60.INS** with text editor (notepad ++).
 
 3. Remove from **copy(dll_rest);** to **copy(shrdll,bla bla bla);**.
 
 4. Install
 
* * *
 
### Remove the Run this time button for outdated ActiveX controls in IE
This setting allows you stop users from seeing the Run this time button and from running specific outdated ActiveX controls in IE.
If you enable this setting, users won't see the Run this time button on the warning message that appears when IE blocks an outdated ActiveX control.
If you disable or don't configure this setting, users will see the Run this time button on the warning message that appears when IE blocks an outdated ActiveX control. Clicking this button lets the user run the outdated ActiveX control once.

**gpedit.msc**
**Administrative Templates\Windows Components\Internet Explorer\Security Features\Add-on Management**