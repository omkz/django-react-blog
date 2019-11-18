Database:
  - software: postgresql
  - user: omz
  - name: myapp
 
runnning banckend:
 - python3 -m venv env
 - source env/bin/activate
 - pip install -r requirements.txt
 - python manage.py migrate
 - python manage.py createsuperuser
 - python manage.py loaddata blog/fixtures/blog.yaml
 - python manage.py runserver
 
running frontend:
 - cd frontend
 - yarn install
 - yarn start