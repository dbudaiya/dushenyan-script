# -*- coding:utf-8 -*-
# B站课集: P62
# 开发时间: 2021/3/16 $ 21:09


# 1.定义字典
a1 = dict(name="李智恩")

# 2.1删除操作
del a1["name"]
print(a1)  # {}

# 2.2新增操作
a1["name"] = "IU"
a1["age"] = 28
print(a1)  # {'name': 'IU', 'age': 28}

# 2.3修改操作
a1["name"] = "李智恩"
print(a1)  # {'name': '李智恩', 'age': 28}
# 2.清空字典元素
a1.clear()
print(a1)  # {}
