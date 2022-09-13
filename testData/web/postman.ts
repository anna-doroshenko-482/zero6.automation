{
  "info": {
  "_postman_id": "804ce3c8-9b99-4750-91e6-a8dbc2f4a5bc",
    "name": "project creation",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
},
  "item": [
  {
    "name": "get projects",
    "event": [
      {
        "listen": "prerequest",
        "script": {
          "exec": [
            ""
          ],
          "type": "text/javascript"
        }
      }
    ],
    "request": {
      "auth": {
        "type": "bearer",
        "bearer": [
          {
            "key": "token",
            "value": "{{token}}",
            "type": "string"
          }
        ]
      },
      "method": "GET",
      "header": [],
      "url": {
        "raw": "{{get-project-url}}",
        "host": [
          "{{get-project-url}}"
        ]
      }
    },
    "response": []
  },
  {
    "name": "get carbon contents",
    "event": [
      {
        "listen": "prerequest",
        "script": {
          "exec": [
            ""
          ],
          "type": "text/javascript"
        }
      }
    ],
    "request": {
      "auth": {
        "type": "bearer",
        "bearer": [
          {
            "key": "token",
            "value": "{{token}}",
            "type": "string"
          }
        ]
      },
      "method": "GET",
      "header": [],
      "url": {
        "raw": "{{get-carbon-content-url}}",
        "host": [
          "{{get-carbon-content-url}}"
        ]
      }
    },
    "response": []
  }
],
  "event": [
  {
    "listen": "prerequest",
    "script": {
      "type": "text/javascript",
      "exec": [
        ""
      ]
    }
  },
  {
    "listen": "test",
    "script": {
      "type": "text/javascript",
      "exec": [
        ""
      ]
    }
  }
],
  "variable": [
  {
    "key": "token",
    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdheWFuZS5wb2dob3N5YW5ANDgyLnNvbHV0aW9ucyIsImlkIjoxMCwiaWF0IjoxNjYxODU5MzY4LCJleHAiOjE2NjI0NjQxNjh9.XwHfnU9IAsWLmBj0pLZ1LLiJ7uCC8EUrPC004uE1xn0",
    "type": "default"
  },
  {
    "key": "get-project-url",
    "value": "http://20.222.119.219:3030/api/project",
    "type": "default"
  },
  {
    "key": "get-carbon-content-url",
    "value": "http://20.222.119.219:3030/api/carbon-content",
    "type": "default"
  }
]
}
Св
