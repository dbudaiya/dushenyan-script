# -*- coding:utf-8 -*-
# B站课集: P6
# 开发时间: 2021/3/13 $ 15:00

# 1.转义字符
print("Hello\nPython!!!")  # newline为换行的意思,取了n字母表示换行 Hello Python!!!中间进行了换行
print("Hello\rPython!!!")  # Python!!! 光标置于此,输出之后的内容 Python!!!
print("Hello\tPython!!!")  # Hello	Python!!! 使用\t表在此进行了Tab键使用 Python!!!
print("Hello\bPython!!!")  # HellPython!!! 使用\b删除此之前的一个字符,就回退的意思
# 1.1
print("http://www.baidu.com")  # http://www.baidu.com
print("我最喜欢的歌手:\"李智恩\"")  # 我最喜欢的歌手:"李智恩"

# 2.原字符: 不希望字符串中的转义字符七作用,就还是要使用原字符,在字符串之前加上r或者R
print(r"Hello\tPython")  # Hello\tPython 作用其实还是蛮大的
