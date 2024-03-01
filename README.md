# `image-resizer`
A CLI for resizing your images.

![comaring sizes](https://github.com/GhoulKingR/image-resizer/raw/main/assets/compare-sizes.png)
## Installing `image-resizer`
To install this project clone the repository, run this command:
```bash
npm i @ghoulking_r/image-resizer
```
Running this command provides an `image-resizer` command for resizing images. Run `image-resizer -h` to be sure everything runs properly. You should get this output in the terminal:

![image-resizer help](https://github.com/GhoulKingR/image-resizer/raw/main/assets/test-help.png)
## Resizing an image
The following is the format for resizing an image with `image-resizer`:
```bash
image-resizer [--width <px> | --height <px>] </path/to/image/file>
```
> The `--width` and `--height` arguments are for specifying the width and height that you want to resize the image to. To avoid stretching the image, the image's aspect ratio is maintained. And you're not allowed to change both the width and height parameters at the same time.
Take a look at these examples:
```bash
image-resizer --width 500 image.jpg    # resize the image to a width of 500px
image-resizer --height 500 image.jpg   # resize the image to a height of 500px
```
By default, `image-resizer` saves the output of the image to an `output.jpg` file in the current working directory. If you want to save your resized image to a different file, `image-resizer` allows you to do so with an `--output` (`-o` for short) option that you can set. For example:
```bash
image-resizer --width 500 -o my-file.png image.jpg
```
## Updating `image-resizer`
To update `image-resizer` to the newest version, run this command:
```bash
npm update @ghoulking_r/image-resizer
```
## Found this project helpful?
Please give this project a start 🌟 and share with your friends.
## Found a bug, or want make a contribution to this project?
If you want to bring up an issue, improve the project, or want to make any fixes, be sure to take a look the [Contrubutors guideline](./CONTRIBUTIONS.md). It tells you everything you need to know.