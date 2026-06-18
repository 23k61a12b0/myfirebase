pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Firebase Deploy') {
            steps {
                bat 'firebase deploy --non-interactive'
            }
        }
    }
}
