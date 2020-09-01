#!/bin/bash
echo "Restoring backup from $POSTGRES_DB database..."
psql -U $POSTGRES_USER -d $POSTGRES_DB < /backup/$POSTGRES_DB-backup.sql
echo "Finished!"