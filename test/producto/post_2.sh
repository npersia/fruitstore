curl -X 'POST' \
  'http://localhost:3080/api/producto' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 2,
  "nombre": "pera",
  "precio": 14,
  "descripcion": "Pera williams"
}'
