#!/bin/bash
echo "Creating backup from $POSTGRES_DB database..."
pg_dump -U $POSTGRES_USER -d $POSTGRES_DB --column-inserts -C > /backup/$POSTGRES_DB-backup.sql
chmod 777 /backup/$POSTGRES_DB-backup.sql
echo "Backup finished!"