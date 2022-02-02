import unittest
from src.hello_fastapi import app
from fastapi.testclient import TestClient

client = TestClient(app)

class TestHelloFastApi(unittest.TestCase):
    def test_hello_world(self):
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"Data" : "Hello World !"}


if __name__ == '__main__':
    unittest.main()