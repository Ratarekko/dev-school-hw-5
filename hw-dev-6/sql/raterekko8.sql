UPDATE city
SET city = 'DNIPRO'
WHERE city = 'Hadiach'
RETURNING*;