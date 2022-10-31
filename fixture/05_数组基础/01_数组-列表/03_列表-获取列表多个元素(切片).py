# -*- coding:utf-8 -*-
# B站课集: P50
# 开发时间: 2021/3/13 $ 17:02

# 1.定义数组,进行切片操作
a1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE", "Lisa"]
# start:1,end:3,步长:2
print(a1[0:3:2])  # ['WHISTLE', 'PLAYING WITH FIRE']

# 1.2 无步长
print(a1[0:3:])  # ['WHISTLE', 'BOOMBAYAH', 'PLAYING WITH FIRE']

# 1.3 默认开始为0
print(a1[:3:2])  # ['WHISTLE', 'PLAYING WITH FIRE']

# 1.4 默认结束为len长度
print(a1[0::2])  # ['WHISTLE', 'PLAYING WITH FIRE']

# 1.5 步长为负数时
print(a1[::-2])  # ['Lisa', 'BOOMBAYAH']

# 1.6 开始值大于结束值时
print(a1[3::-2])  # ['Lisa', 'BOOMBAYAH']
print(a1[2::-2])  # ['PLAYING WITH FIRE', 'WHISTLE']
