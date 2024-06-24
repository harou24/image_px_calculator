import unittest
from src.img_px_calculator import getImgDimFromUrl

class TestImagePxCalculator(unittest.TestCase):
    
    def test_getImgDimFromUrl(self):
        url = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
        sizeInPx = getImgDimFromUrl(url)
        assert sizeInPx == 660000


if __name__ == '__main__':
    unittest.main()
