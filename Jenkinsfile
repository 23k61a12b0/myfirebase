pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Firebase') {
            steps {
                bat 'where firebase'
                bat '"C:\\Users\\Sanepu\\AppData\\Roaming\\npm\\firebase.cmd" --version'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                bat '"C:\\Users\\Sanepu\\AppData\\Roaming\\npm\\firebase.cmd" deploy --non-interactive'
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
