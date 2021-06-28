curl -X 'POST' \
  'http://localhost:3080/api/producto' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 15,
  "nombre": "pera",
  "precio": 50,
  "descripcion": "peras williams"
}'
