pipeline {

  agent any
  
  tools {nodejs "815Node"}
  
  stages {
    
    stage("build") {
      steps {
         configFileProvider([configFile(fileId: 'app-barber-shop-appointment-app-ang', variable: 'settingsFile')]) {
           echo 'building the applications...'
              script {
                def config = readJSON file:"$settingsFile"

                sh "npm i"
 
              }
           }
        }
    }
    
    
    stage("build-docker-image") {
      steps {
        echo 'building the docker image...'
        sh 'docker build -t oiestradag/app-barber-shop-appointment-app-ang .'
      }
    }
    
    
    stage("push-dockerhub") {
      steps {
          withCredentials([string(credentialsId: 'docker_hub_oiestradag_pass', variable: 'pass')]){
              sh 'docker login -u oiestradag -p "$pass"'
              sh 'docker push oiestradag/app-barber-shop-appointment-app-ang'
          }
       }
    }
  
    stage("test") {
      steps {
        echo 'testing the applications...'
      }
    }
    
   stage("docker swarm deploy") {
      steps {
        
           configFileProvider([configFile(fileId: 'app-barber-shop-appointment-app-ang', variable: 'settingsFile')]) {
           echo 'deploying the applications...'
            script {
              echo "The file $settingsFile"
              def config = readJSON file:"$settingsFile"
              sh 'docker service rm app-barber-shop-appointment-app-ang || true'
              sh "docker service create --name app-barber-shop-appointment-app-ang --replicas 3 -p 8086:80 -e API_URL=${config.API_URL} oiestradag/app-barber-shop-appointment-app-ang"
            }
        }       
      }
    }
  }
}
