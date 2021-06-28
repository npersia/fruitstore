curl -X 'PUT' \
  'http://localhost:3080/api/producto' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 15,
  "nombre": "anana",
  "precio": 78,
  "descripcion": "anana grandota"
}'
