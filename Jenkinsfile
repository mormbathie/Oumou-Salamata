pipeline {
    agent {
        docker {
            image 'node:20'
            args '--network jenkins-net'
        }
    }

    environment {
        DATABASE_URL = "postgresql://postgres:postgres@db:5432/school_db"
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