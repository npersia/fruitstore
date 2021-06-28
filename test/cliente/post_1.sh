curl -X 'POST' \
  'http://localhost:3080/api/cliente' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 1,
  "nombre": "nahuel",
  "us_telegram": "nahuel_telegram",
  "direccion": "casa nahuel",
  "mail": "nahuel mail"
}'
