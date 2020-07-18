pipeline {
    agent any

    tools {nodejs "NodeJS"}
    stages{
        stage('Clone repository') {
            steps{
                checkout scm
                }
            }

        stage('Build') {
            steps {
                sh 'npm install'
                }
            }
        }
    }