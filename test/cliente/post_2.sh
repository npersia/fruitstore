curl -X 'POST' \
  'http://localhost:3080/api/cliente' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 2,
  "nombre": "juan",
  "us_telegram": "juan_telegram",
  "direccion": "casa juan",
  "mail": "juan mail"
}'
