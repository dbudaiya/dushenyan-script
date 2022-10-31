# -*- coding:utf-8 -*-
# B站课集: P65
# 开发时间: 2021/3/16 $ 21:40

keys = ["name", "age"]
items = ["李智恩", 28]
a1 = {keys.upper(): items for keys, items in zip(keys, items)}
print(a1)
