---
title: Troubleshoot Compile
published: true
---
1. Sistem SPEKS keluar error WUC-19: Unable to write to local file
- Disable UAC With a Registry Hack
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System

Over on the right-hand side, you should see a setting for EnableLUA, which you’ll want to customize as follows:

    UAC Enabled: 1
    UAC Disabled: 0

 - - - - 
