node {
    def app

    stage('Clone repository') {
     checkout scm
    }

    stage('Build') {
        steps {
                sh 'npm install'
            }
    }
}