# -*- coding:utf-8 -*-
# B站课集: P46,47
# 开发时间: 2021/3/13 $ 17:00

# 1.创建对象
a1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE"]
print(a1)  # ['WHISTLE', 'BOOMBAYAH', 'PLAYING WITH FIRE']
print(id(a1))  # 47703560
print(type(a1))  # <type 'list'>

# 1.2 创建对象的第二种方式: 使用内置函数
a2 = list(["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE"])
print(a2)  # ['WHISTLE', 'BOOMBAYAH', 'PLAYING WITH FIRE']
