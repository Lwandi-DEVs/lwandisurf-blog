migrate:
	docker-compose -f docker-compose-dev.yml exec web python manage.py migrate

makemigrations:
	docker-compose -f docker-compose-dev.yml exec web python manage.py makemigrations

collectstatic:
	docker-compose -f docker-compose-dev.yml exec web python manage.py collectstatic --no-input --clear
	docker-compose -f docker-compose-dev.yml exec web chmod -R 777 staticfiles/

media_permissions:
	docker-compose -f docker-compose-dev.yml exec web chmod -R 777 mediafiles/

stack_up:
	docker-compose -f docker-compose-dev.yml up -d

stack_down:
	docker-compose -f docker-compose-dev.yml down -v

stack_ps:
	docker-compose -f docker-compose-dev.yml ps

stack_logs:
	docker-compose -f docker-compose-dev.yml logs -f

logs_web:
	docker-compose -f docker-compose-dev.yml logs -f web

logs_db:
	docker-compose -f docker-compose-dev.yml logs -f db

db_backup:
	docker-compose -f docker-compose-dev.yml exec db backup.sh

db_restore:
	docker-compose -f docker-compose-dev.yml exec db restore.sh

# build_web:
# 	docker-compose -f docker-compose-dev.yml build --no-cache web

# build_db:
# 	docker-compose -f docker-compose-dev.yml build --no-cache db

# build_all:
# 	docker-compose -f docker-compose-dev.yml build --no-cache web
# 	docker-compose -f docker-compose-dev.yml build --no-cache db