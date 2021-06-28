curl -X 'PUT' \
  'http://localhost:3080/api/producto/2' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 150,
  "nombre": "kiwi",
  "precio": 80,
  "descripcion": "kiwi peludo"
}'
