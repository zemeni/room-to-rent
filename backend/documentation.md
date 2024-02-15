# INSTALLING JAVA-21 in Windows
wget https://www.oracle.com/java/technologies/downloads/
tar -zxvf jdk-21..
sudo mv jdk-21.. /opt/
<h3> Use the update-alternatives command to set up symbolic links to the Java commands. </h3>
sudo update-alternatives --install /usr/bin/java java /opt/jdk-21.0.1/bin/java 100
sudo update-alternatives --install /usr/bin/javac javac /opt/jdk-21.0.1/bin/javac 100

<h3> Use the following commands to set the default Java and Java Compiler versions. </h3>
sudo update-alternatives --config java
sudo update-alternatives --config javac

<h3> Edit the /etc/environment file to set the environment variables globally. </h3>
sudo nano /etc/environment
JAVA_HOME=/opt/jdk-21.0.1
JRE_HOME=/opt/jdk-21.0.1/jre
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
export JAVA_HOME
export JRE_HOME
export PATH

## installing java21 in ubuntu
wget java21-ubuntu link
sudo dpkg -i jdk21...deb
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk21../bin/java 1
sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk21../bin/javac 1

java --version

sudo vi /etc/environment
JAVA_HOMe="usr/lib/jvm/jdk .../"

source /etc/environment

## installing maven in Ubuntu
install the latest binary (apache-maven-3.9.6-bin.tar.gz) file from maven website
export to any folder lets say(/opt/) using command
tar xvzf apache-maven-3.9.6-bin.tar.gz
add the bin path to the /etc/environment
PATH=/opt/apache-maven-3.9.6/bin;$PATH
source /etc/environment (refresh environment file)
maven --version
