import unittest
from src.img_px_calculator import get_nb_px_in_img_from_path, get_nb_px_in_img_from_url

class TestImagePxCalculator(unittest.TestCase):
    def test_get_nb_pixels_in_image(self):
        sizeInPx = get_nb_px_in_img_from_path('/home/harou24/Desktop/test.png')
        assert sizeInPx == 438138
    
    def test_get_nb_px_in_img_from_url(self):
        url = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
        sizeInPx = get_nb_px_in_img_from_url(url)
        assert sizeInPx == 660000


if __name__ == '__main__':
    unittest.main()
