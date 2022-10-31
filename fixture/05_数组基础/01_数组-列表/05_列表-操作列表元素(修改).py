# -*- coding:utf-8 -*-
# B站课集: P54
# 开发时间: 2021/3/13 $ 17:03

# 修改操作
a1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE", "Lisa"]

# 1.1 通过索引值修改
a1[1] = "IU"
print a1  # ['WHISTLE', 'IU', 'PLAYING WITH FIRE', 'Lisa'],旧的值将会被修改掉

# 1.2 通过切片修改
a1[1:2] = ["dushenyan"]  # 在第二值和第三个值中替换掉IU为dushenyan  注:后面赋值为一个列表,而不是字符串
print a1  # ['WHISTLE', 'dushenyan', 'PLAYING WITH FIRE', 'Lisa']
