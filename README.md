# My files

(WIP) Google Drive Clone, writen in Typescript, React.js, Node.js and Postgresql

## How to build

1. Install NodeJS and PostgreSQL
2. Clone the repo
```bash
# SSH
git clone git@github.com:Caresle/my_files.git

# HTTPS
git clone https://github.com/Caresle/my_files.git
```

3. Enter the folder and install the dependencies of each subfolder (client and backend) for example using PNPM:

```bash
cd path_to_repo_folder

# Client folder
cd client
pnpm install

# Backend folder
cd backend
pnpm install
```

4. Create and `.env` file inside the `backend` folder and set the next variables.

```bash
# Example of the env file to be used
PORT=3000

# DB
DB_NAME=my_files
DB_USER=postgres
DB_PASS=pass
DB_HOST=localhost
DB_PORT=5432

# BCRYPT
SECRET_PASS=2

# JWT
JWT_SECRET="m_yS3c#rt2-09"
```

5. Run the development servers of each part
```bash
# backend and client
pnpm run dev
```