# lwandisurf-blog :surfer:

## How to run the docker compose stack for development?

### **1. Run the follow command:** ### 

``` 
make stack_up
```

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
	
