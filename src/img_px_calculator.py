import cv2
import urllib.request
import numpy as np

def get_nb_px_in_img_from_path(imageUrl):
    img = cv2.imread(imageUrl)
    dim = img.shape
    return dim[0]*dim[1]

def get_nb_px_in_img_from_url(url):
    res = urllib.request.urlopen(url)
    arr = np.asarray(bytearray(res.read()), dtype=np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_UNCHANGED)
    dim = img.shape
    return dim[0]*dim[1]
