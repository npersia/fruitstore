curl -X 'PUT' \
  'http://localhost:3080/api/cliente/1' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 5,
  "direccion": "casitaa",
  "nombre": "nahuelito"
}'
