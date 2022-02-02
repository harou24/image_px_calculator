import unittest
from src.img_px_calculator import get_nb_px_in_img

class TestImagePxCalculator(unittest.TestCase):
    def test_get_nb_pixels_in_image(self):
        print("hello")
        sizeInPx = get_nb_px_in_img('/home/harou24/Desktop/test.png')
        assert sizeInPx == 2169


if __name__ == '__main__':
    unittest.main()
