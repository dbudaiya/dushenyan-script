# -*- coding:utf-8 -*-
# B站课集: P16
# 开发时间: 2021/3/13 $ 14:58

# 1.1 str()
print("----------str函数------------------")
a1 = 3.12
a2 = 12
print(str(a1), type(a1))  # ('3.12', <type 'float'>)
print(str(a2), type(a2))  # ('12', <type 'int'>)
# 1.2 实例
name = "李智恩"
age = 28
print('我最喜欢歌手:' + name + ",今年" + str(age) + "岁")  # 我最喜欢歌手:李智恩,今年28岁 int类型将会通过str函数转化为str类型

# 2.1 int()
print("------------int函数-----------------")
b1 = "李智恩"
b2 = "12"
b3 = "3.14"
b4 = 3.14
# print(int(b1), type(b1))  # 出错
print(int(b2), type(b2))  # (12, <type 'str'>)
# print(int(b3), type(b3))   # 出错
print(int(b4), type(b4))  # (3, <type 'float'>)

# 3.1 float()
print("------------float函数-----------------")
c1 = "李智恩"
c2 = "12"
c3 = "3.14"
c4 = 99

# print(float(c1), type(c1))  # 出错
print(float(c2), type(c2))  # (12.0, <type 'str'>)
print(float(c3), type(c3))  # (3.14, <type 'str'>)
print(float(c4), type(c4))  # (99.0, <type 'int'>)
