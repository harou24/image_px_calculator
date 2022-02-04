export type Image = {
    size: number;
}
/*
UploadFile¶
UploadFile has the following attributes:

filename: A str with the original file name that was uploaded (e.g. myimage.jpg).
content_type: A str with the content type (MIME type / media type) (e.g. image/jpeg).
file: A SpooledTemporaryFile (a file-like object). This is the actual Python file that you can pass directly to other functions or libraries that expect a "file-like" object.
UploadFile has the following async methods. They all call the corresponding file methods underneath (using the internal SpooledTemporaryFile).

write(data): Writes data (str or bytes) to the file.
read(size): Reads size (int) bytes/characters of the file.
seek(offset): Goes to the byte position offset (int) in the file.
E.g., await myfile.seek(0) would go to the start of the file.
This is especially useful if you run await myfile.read() once and then need to read the contents again.
close(): Closes the file.

*/
export type File = {
    filename: string;
    content_type: string;
    file: object;
}