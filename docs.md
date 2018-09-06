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

* * *

### Installation Did Not Succeed..net framework 4.6.2 has not been installed because:A certificate chain could not be built to a trusted root authority“A certificate chain could not be built to a trusted root authority.”

![]({{ site.url }}/assets/img/dotnet.png)

Customer MUST have admin rights.

I created a temp folder on the root of the c drive and saved the Certificate there from a USB drive this worked great on our hospital computers with no network connectivity

A copy of the needed certificate: you can directly download it from: http://go.microsoft.com/fwlink/?linkid=747875&clcid=0x409

In Windows: Start, Run, certmgr.msc

Right-click the “Trusted Root Certification Authorities”, “All Tasks”, “Import”


This will launch the Certificate Import Wizard, which will help you install the root certificate.

use the browse button and point to the location you saved the cert. example C:\temp\ and select your cert.

running through the installer should install the should allow you to install the MicRooCerAut2011_2011_03_22.cer that you placed in the temp folder in C: and you should be good to go.

Hope this helps
* * *