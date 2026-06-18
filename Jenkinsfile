pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('firebase-token')
        FIREBASE = 'C:\\Users\\Laksh\\AppData\\Roaming\\npm\\firebase.cmd'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Firebase Version') {
            steps {
                bat '"%FIREBASE%" --version'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                bat '"%FIREBASE%" deploy --token "%FIREBASE_TOKEN%" --non-interactive'
            }
        }
    }

    post {
        success {
            echo 'Firebase deployment successful!'
        }

        failure {
            echo 'Firebase deployment failed!'
        }
    }
}
