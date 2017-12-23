# Python Flask App boilerplate for Appengine

Firebase Authentication, Google App Engine, Google Cloud SQL

You'll need to have [Python 2.7](https://www.python.org/) and the [Google Cloud SDK](https://cloud.google.com/sdk/?hl=en)
installed and initialized to an App Engine project before running the code in
this sample.


## Setup
1. Clone this repo:

        git clone https://github.com/dylanrdrake/appeng-firebase-mysql

1. Navigate to the backend directory:

        cd appeng-firebase-mysql/backend

1. Install the 3rd-party dependencies to the backend service:

        pip install -t lib/ -r requirements.txt

    if you get python3 print statement error, remove * in lib/, install pip2.7 and:

        pip2.7 install -t lib/ -r requirements.txt

1. To access Cloud SQL:

    - create file: backend/env_config.py to store sensitive logins, passwords and keys. 
    - add:
    
          env_config.py
    
    to .gitignore in the project root to keep sensitive credentials from making their way to public repositories


1. [Add Firebase to your app.](https://firebase.google.com/docs/web/setup#add_firebase_to_your_app)
1. Add your Firebase project ID to the backend’s `app.yaml` file as an
environment variable.
1. Select which providers you want to enable. Delete the providers from
`main.js` that you do no want to offer. Enable the providers you chose to keep
in the Firebase console under **Auth** > **Sign-in Method** >
**Sign-in providers**.
1. In the Firebase console, under **OAuth redirect domains**, click
**Add Domain** and enter the domain of your app on App Engine:
[PROJECT_ID].appspot.com. Do not include "http://" before the domain name.


## Run Locally
1. Install AppEngine included libaries listed in backend/app.yaml into your system python:

        pip install <package>

    These will automatically be imported into the runtime when deployed to AppEngine 

1. Add the backend host URL to `main.js`: http://localhost:8081.

1. Navigate to the root directory of the application and start the development
server with the following command:

        dev_appserver.py frontend/app.yaml backend/app.yaml

1. Visit [http://locahost:8080/](http://locahost:8080/) in a web browser.


## Deploy
1. Change the backend host URL in `main.js` to
https://backend-dot-[PROJECT_ID].appspot.com.
1. Deploy the application using the Cloud SDK command-line interface:

        gcloud app deploy frontend/app.yaml backend/app.yaml

1. View the application live at https://[PROJECT_ID].appspot.com.
