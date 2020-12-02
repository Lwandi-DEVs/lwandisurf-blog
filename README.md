# lwandisurf-blog :surfer:

Website developed for the ONG LwandiSurf (Mental health organization. Gives opportunities and life lessons to local kids through)

## How to run the docker compose stack for development?

### **1. Run the follow command:** ### 

``` 
make stack_up
```

- The Django application will be served in localhost:8000
- For Django logs visualization execute "make logs_web"

### **2. Go to the Django project directory:** ###

``` 
cd django/app/
```
### **3. Open the code editor by your preference and coding!**

___ 

## Make commands documentation
This is a simplified documentation about how to use the commands of the Makefile with make.

### **Django management scripts**

Commands to execute the management scripts of Django Framework.

- **makemigrations:** Creating new migrations based on the changes in models. ( Alias to: *python manage.py makemigrations* )

``` 
make makemigrations
```

- **migrate:** Applying and unapplying migrations. ( Alias to: *python manage.py migrate* ) 

``` 
make migrate
```

- **collectstatic:** Collects the static files into STATIC_ROOT. ( Alias to: *python manage.py collectstatic* )

``` 
make collectstatic 
```

- **createsuperuser:** Create a Django super user. ( Alias to: *python manage.py createsuperuser* )

```
make createsuperuser
```

### **Files and directories**
Commands to managing files and directories inside of services containers.

- **media_permissions:** Gives media files directory access permissions to outside container users  
``` 
make media_permissions 
```

### **Docker compose stack**

Commands to deploy, scaling and monitoring of the services stack.

- **stack_up:** Deploy the services stack defined in *docker-compose.yml* file. 
``` 
make stack_up
```

- **stack_down:** Stops and removes all services defined in *docker-compose.yml* file. 
```
make stack_down
```

- **stack_ps:** Shows all running services containers and yours respective states.
```
make stack_ps
```	

- **stack_logs:** Shows the logs of all services stack merged. The output of this command shows the runtime logs incrementally ( *use CTRL+C to quit*).
```
make stack_logs
```

### **Docker compose services**

Commands to inspection and management of specific services.

- **logs_web:** Shows the logs of service named as "web" in services stack. The output of this command shows the runtime logs incrementally ( *use CTRL+C to quit*).
```
make logs_web
```

- **logs_db:** Shows the logs of service named as "db" in services stack. The output of this command shows the runtime logs incrementally ( *use CTRL+C to quit*).
```
make logs_db
```
	
### **Database scripts**

Commands to run management scripts in the database container.

- **db_backup:** Creates a backup of database defined in POSTGRES_DB environment variable. The output file format is .sql and his destiny directory in container is mounted as a volume in host in the [volumes/postgres_backup](volumes/postgres_backup)
```
make db_backup
```

- **db_restore:** Restores the database backup saved in the SQL file generate by the command ***make db_backup***. Make sure than the SQL backup file is located in the [volumes/postgres_backup](volumes/postgres_backup)
```
make db_restore
```
	
## Basic API documentation
This is a simplified documentation of the REST API.

### **User autentication**

All API endpoints require Token authentication to be consumed.
  To perform authentication through an HTTP request, it is necessary to perform a POST request to the endpoint [http://localhost:8000/api-auth/](http://localhost:8000/api-auth/) (localhost link) with the following body (example):

```
{
    "username" : "admin"
    "password" : "test123"
}   
```

The request returns the user's token in response to a successful login. If the login is not successful the request will return a message of invalid authentication data.

### **Send token in requests**

For users to authenticate, the user token key should be included in the Authorization HTTP header. The key should be prefixed by the string literal "Token", with whitespace separating the two strings. For example:

```
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```
