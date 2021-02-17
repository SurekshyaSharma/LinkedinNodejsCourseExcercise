# MurphyPhotoGallary
# webpage_using_maven
 
https://maven.apache.org/download.cgi

## Create Web Application:
mvn archetype:generate -DgroupId=com.seis635 -DartifactId=MurphyPhotoGallary -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false
###GO to repository and look for index.jsp
###Archetype is a design pattern, and we apply the goals called generate.And we are adding tag info like group ID, artifact Id and so on. Main thing to notice, would be packaging tag, for web app, it should WAR AND FOR NORMAL IT SHOULD BE JAR 
 
## Create a normal App:
mvn archetype:generate -DgroupId=com.seis635 -DartifactId=trucks -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
cd trucks
open a pom file (edit with notepad)
mvn help:effective-pom
mvn install (note:inside the directory )
java -cp target/trucks-1.0-SNAPSHOT.jar com.seis635.App
