# Backend

## DOCKER DB

```bash
# Get the postresql image
docker pull postgres

# Run the container
docker run --name my_files_db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=myfilesdb -p 5433:5432 -d postgres
```

Add to the `.env` file the next variables: 

```env
# DOCKER
DB_NAME=myfilesdb
DB_USER=postgres
DB_PASS=password
DB_HOST=localhost
DB_PORT=5433
```