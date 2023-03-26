apt update && apt install curl vim aria2 lrzsz screen gzip sudo -y &&\
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bk && echo "Port 22
PasswordAuthentication yes
PermitRootLogin yes">>/etc/ssh/sshd_config && sudo service ssh start && sudo update-rc.d ssh enable
