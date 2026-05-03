pipeline {
    agent any

    environment {
        DATABASE_URL = "postgresql://test:test@localhost:5432/test"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'Principale', url: 'https://github.com/mormbathie/Oumou-Salamata.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Prisma Generate') {
            steps {
                sh 'npx prisma generate'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}