# -*- coding:utf-8 -*-
# B站课集: P60
# 开发时间: 2021/3/16 $ 20:54

# 1.定义字典
a1 = dict(name="李智恩", age=28)

# 1.1使用[]获取键值名字
print(a1["name"])
# print(a1["李智恩"]) # keyError

# 1.2使用get()方法获取键值
print(a1.get("name"))
# print(a1.get("lizhien"))  # None
