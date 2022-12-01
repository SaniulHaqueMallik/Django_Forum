<!-- Changes to be made while deploying on Replit.
Step 1:File Name : Settings.py
                                 ALLOWED_HOSTS = ['*']
                                X_FRAME_OPTIONS = "*"
                                CORS_ORIGIN_ALLOW_ALL = True
                                CSRF_TRUSTED_ORIGINS =['https://127.0.0.1:8000',https://0.0.0:3000']

Step 2:  In Installed Apps Section Add the below mentioned App.
              'corsheaders'

Step 3:  In middleware Section Add the below mentioned Midlleware.
              ''corsheaders.middleware.CorsMiddleware'',

Step 4: Packages to be installed .
             a). Pip install django-cors-headers
             b). Pip install whitenoise
             c). Pip install tzdata -->
