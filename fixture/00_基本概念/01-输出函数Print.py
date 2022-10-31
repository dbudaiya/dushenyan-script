# -*- coding:utf-8 -*-
# B站课集: P5
# 开发时间: 2021/3/13 $ 14:59
# 输出数字
print(123)

# 输出字符串
print('李智恩')
print("李智恩")

# 输出运算符的表达式值
print(3 + 1)

# 将数据输出文件
# open方法用于创建文件,这一块会在模块化里接触到相关的用法
print(open("C:/Users/DUHAI/Desktop/aa.txt", 'a+'))

# 2.使用占位的方式
a1 = 2
# 2.1%d
print("输出数字:%d" % a1)
# 2.2%s
a2 = "李智恩"
print("最喜欢的歌手:%s" % a2)

# 2.3合并占位
print("我最喜欢的歌手%s,今年%d岁" % (a2, a1))  # 注:注意在字符串之后不能接逗号

# 3.多参传递
print("www", "baidu", "com", sep=".")
print("www2",end="\n")
