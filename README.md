# TipsVortex 🌪️

A lightweight Next.js app that generates 🎲 random tips. Backed by a serverless MySQL infrastructure and a TypeScript ORM, delivering dynamic REST APIs.

## How to Setup

1. Clone the repo.
2. Run `pnpm install` (or simply use npm, yarn, etc.)
3. `pnpm dev` to start the server.

## Available Scripts

In the project folder, you can run:

### `pnpm dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `pnpm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Live demo

https://tipsvortex.vercel.app/

## SQL queries

### Set up and populating data

```sql
CREATE TABLE sources (
   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   source varchar(255) NOT NULL UNIQUE
);
```

```sql
CREATE TABLE categories (
   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   category varchar(255) NOT NULL UNIQUE
);
```

```sql
CREATE TABLE tips (
   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   tip varchar(255) NOT NULL UNIQUE,
   source_id int NOT NULL,
   category_id int NOT NULL,
   KEY source_id_idx (source_id),
   KEY category_id_idx (category_id)
);
```

```sql
SHOW TABLES;
```

### Inserting data

```sql
INSERT INTO sources (source) VALUES ('Foo');
```

```sql
INSERT INTO categories (category) VALUES ('Tools');
```

```sql
INSERT INTO tips (tip, source_id, category_id) VALUES ("Text here.", 1, 1);
```

### Selecting data

```sql
SELECT S.source, C.category, T.tip
FROM tips T
INNER JOIN sources S ON T.source_id = S.id
INNER JOIN categories C ON T.category_id = C.id;
```

#### Output sample

| Source             | Category | Tip                                                                                                                                                                                                                                                                     |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visual Studio Code | Tools    | IntelliSense can be additionally customized to fit your workflow and personal preferences. (See: [https://code.visualstudio.com/docs/editor/intellisense#\_customizing-intellisense](https://code.visualstudio.com/docs/editor/intellisense#_customizing-intellisense)) |
| GeeksforGeeks.org  | Misc     | Write clean, readable code: meaningful names, follow PEP 8, break tasks into functions, comment, use version control. Code is read more than written, so make it easy for others (and future you) to understand.                                                        |
