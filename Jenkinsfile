pipeline {
    agent any

    tools {nodejs "node"}
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