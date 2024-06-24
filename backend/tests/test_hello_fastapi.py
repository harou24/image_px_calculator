import unittest
from src.hello_fastapi import app
from fastapi.testclient import TestClient

client = TestClient(app)

class TestHelloFastApi(unittest.TestCase):
    def test_hello_world(self):
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"Data" : "Hello World !"}

    def test_get_size(self):
        response = client.get("/get-size")
        assert response.status_code == 200
        assert response.json() == {"size" : 660000}

    def test_get_size_from_url(self):
        imgUrl = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        response = client.post("/get-size-from-url/", json={"url": imgUrl})
        assert response.status_code == 200
        assert response.json() == {"size" : 660000}

if __name__ == '__main__':
    unittest.main()