pipeline {
    agent any

    stages {

        stage('Environment Check') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --runInBand'
            }
        }

        stage('Success') {
            steps {
                echo 'FlavorRush CI pipeline completed successfully! 🚀'
            }
        }
    }
}