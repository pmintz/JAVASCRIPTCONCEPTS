//http://localhost:8080/env-vars.html/

//CODE_CHANGES = getGitChanges()

pipeline {

//scripted - groovy

//declarative - easier to understand but not that powerful
	
	

	agent any //where to execute
	
	tools {
		//maven 
		//gradle
		//jdk
		//ant 'Ant'
	}
	
	environment {
		NEW_VERSION='1.3.0'
		SERVER_CREDENTIALS = credentials('33597d48-ab17-4cf3-b33f-76252b7575f7')
	}
	
	parameters {
		
		//string(name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
		choice(name: 'VERSION', choices: ['1.1.0', '1.2.0'], description: '')
		booleanParam(name: 'executeTests', defaultValue: true, description: 'version to deploy on prod')
		
	}

	stages {

		stage("build") {
			
			//when {
				//expression {
					//env.BRANCH_NAME == 'dev' && CODE_CHANGES == true
				//}
			//}
	
			steps {
			
				//sh 'npm install'
				//sh 'npm build'

				echo 'building the application...'
				echo "building version ${NEW_VERSION}"
			
			}
		}

		stage("test") {
			
			//when {
				//expression {
					//env.BRANCH_NAME == 'dev' || BRANCH_NAME == 'main'
					params.executeTests // == true
				//}
			//}
	
			steps { //will only execute if branch name is dev or main

				echo 'testing the application...'
				echo "deploying ${params.VERSION}"
			}
		}

		stage("deploy") {
	
			steps {
				echo 'deploying the application...'
				echo 'deploying with ${SEVER_CREDENTIALS}'
			
			}
		}
	}
	
	//post {
		//always {
		//}
		//success {
		//}
		//failure {
		//}
		//build status
		//build status changes
		
	//}
}

//node {

	// groovy script

//}
