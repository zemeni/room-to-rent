# INSTALLING JAVA-21 in Windows
<a>https://www.oracle.com/java/technologies/downloads/</a>
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
