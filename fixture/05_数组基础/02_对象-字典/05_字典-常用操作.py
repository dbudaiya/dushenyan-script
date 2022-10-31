# -*- coding:utf-8 -*-
# B站课集: P62
# 开发时间: 2021/3/16 $ 21:23

# 1.创建字典
a1 = {"name": "李智恩", "age": 28}

# 1.1获取keys值
print(a1.keys())  # dict_keys(['name', 'age'])
print(type(a1.keys()))  # <class 'dict_keys'>
print(list(a1.keys()))  # ['name', 'age']
# 注:上述两条语句,后面的也可使用

# 1.2获取value值
print(a1.values())  # dict_values(['李智恩', 28])

# 1.3 获取键值对
print(a1.items())  # dict_items([('name', '李智恩'), ('age', 28)])
