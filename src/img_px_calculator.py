import cv2
import urllib.request
import numpy as np

def get_nb_px_in_img(imageUrl):
    img = cv2.imread(imageUrl)
    dim = img.shape
    return dim[1]*dim[2]

def get_nb_px_in_img_from_url(url):
    res = urllib.request.urlopen(url)
    arr = np.asarray(bytearray(res.read()), dtype=np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_UNCHANGED)
    dim = img.shape
    return dim

print(get_nb_px_in_img_from_url('https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'))
