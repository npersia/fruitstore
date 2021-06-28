curl -X 'POST' \
  'http://localhost:3080/api/producto' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 1,
  "nombre": "banana",
  "precio": 15,
  "descripcion": "Banana de Ecuador"
}'
