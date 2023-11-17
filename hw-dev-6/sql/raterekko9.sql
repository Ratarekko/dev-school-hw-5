CREATE TABLE users (
    id serial,
    username text,
    email text,
    first_name text,
    last_name text,
    password text
);

INSERT INTO users VALUES (1, 'ratarekko', 'ukhalov.o.a@gmail.com', 'Oleksii', 'Ukhalov', 'qwerty12345 :)')
RETURNING *;