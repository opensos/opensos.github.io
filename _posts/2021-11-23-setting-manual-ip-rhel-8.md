---
published: true
---

How do I configure an ens3 interface with static network settings RHEL 8

ip a show

sudo nmcli con mod ens3 ipv4.addresses 192.168.1.20/24
sudo nmcli con mod ens3 ipv4.gateway 192.168.1.1
sudo nmcli con mod ens3 ipv4.method manual
sudo nmcli con mod ens3 ipv4.dns "1.1.1.1"
sudo nmcli con up ens3