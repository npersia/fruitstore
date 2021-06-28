curl -X 'POST' \
  'http://localhost:3080/api/pedido' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 1,
  "productos": [
    {
      "id_producto": 2,
      "cantidad": 5
    }
  ],
  "cliente": 1,
  "estado": "calle"
}'
