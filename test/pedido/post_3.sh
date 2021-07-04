curl -X 'POST' \
  'http://localhost:3080/api/pedido' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "productos": [
    {
      "id_producto": 2,
      "cantidad": 5
    },
    {
      "id_producto": 1,
      "cantidad": 2
    }
  ],
  "us_telegram": "npersia2",
  "estado": "calle"
}'
