import cv2
import urllib.request
import numpy as np

def getImgDimFromPath(path):
    img = cv2.imread(path)
    dim = img.shape
    return dim[0]*dim[1]

def getImgDimFromUrl(url):
    try:
        res = urllib.request.urlopen(url)
    except urllib.error.HTTPError as e:
        print(e.__dict__)
    except urllib.error.URLError as e:
        print(e.__dict__)
    arr = np.asarray(bytearray(res.read()), dtype=np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_UNCHANGED)
    dim = img.shape
    return dim[0]*dim[1]
