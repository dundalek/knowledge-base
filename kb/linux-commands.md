
## PDF utils

PDF GUI
: pdfchain

Convert JPG files to PDF
: convert {{infiles}} {{outfile}}
eg: {infiles: *.jpg, outfile: foo.pdf}

Join PDFs to single file
: pdftk {{infiles}} cat output {{outfile}}
eg: {infiles: *.pdf, outfile: all.pdf}

Extract images from PDF
: pdfimages -j {{infile}} {{basename}}
eg: {infile: file.pdf, basename: bar}

## Network

Turn on interface
: ifconfig {{iface}} {{ip}}  netmask {{mask}} up
eg: {iface: eth0, ip: 192.168.1.2, mask: 255.255.255.0}

Turn off interface
: ifconfig {{iface}} down
eg: {iface: eth0}

Setup gateway
: route add default gw {{adress}}
eg: {address: 192.168.1.1}

Set MAC address
: ifconfig {{iface}} hw ether {{mac}}
eg: {iface: eth0, mac: 00:a0:d1:cb:d3:0b}

List WiFi networks
: iwlist {{wiface}} scan
eg: {wiface: wlan0}

## Disk utils

Empty disk caches
: sync ; echo 3 > /proc/sys/vm/drop_caches;

Empty swap
: swapoff {{swapfile}}; swapon {{swapfile}}
eg: {swapfile: /dev/sda4}

List disk paritions
: fdisk -l {{disk}}
eg: {disk: /dev/sda}

Partition editor
: cfdisk {{disk}}
eg: {disk: /dev/sda}

Set partition label
: e2label {{partition}} {{label}}
eg: {partition: /dev/sda1, label: my_label}
alternative: tune2fs -L <name> /dev/<part_name>

Print partition block size
: tune2fs -l {{partition}} | grep -i 'block size'
eg: {partition: /dev/sda1}

Set number of reserved blocks in partition
: tune2fs -r {{blocknum}} {{partition}}
eg: {partition: /dev/sda1, blocknum: 10000}

Get rid of message: "Give root password for maintenance (or type Control D to continue)"
: tune2fs -j -e continue {{partition}}
eg: {partition: /dev/sda1}

## Debian

Set which JAVA version to use
: update-alternatives --config java; update-alternatives --config javac

Set which services in init.d to run
: sysv-rc-conf

Print number of installed packages
: qlist -I | wc -l

Create deb package from sources
: ./configure; make; sudo checkinstall -D make install

Show version of Debian/Ubuntu
: lsb_release -a

## Bash

Transform string to lowercase
: echo {{string}} | tr "[:upper:]" "[:lower:]"

## Misc

Run webserver in a current directory
: python -m SimpleHTTPServer

Watch directory for changes
: while true; do inotifywait -e modify -e move -e create -e delete -r {{dir}}; {{action}}; done
eg: {dir: ".", action: "echo changed"}

Print disk usage
: du -shc {{dir}}
eg: {dir: "."}

Finding files by inode number
: find / -inum {{inode_number}}

Mount ISO file
: mount -o loop -t iso9660 {{isofile}} {{mountpoint}}
eg: {isofile: filename.iso, mountpoint: /mnt}

Fix FN keys for Apple keyboard
: echo 2 | sudo tee /sys/module/hid_apple/parameters/fnmode

## Git

Run merge tool
: git mergetool -t {{mergetool}}
eg: {mergetool: kdiff3}
