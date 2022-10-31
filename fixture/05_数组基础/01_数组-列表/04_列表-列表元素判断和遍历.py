# -*- coding:utf-8 -*-
# B站课集: P51
# 开发时间: 2021/3/13 $ 17:03

# 1.定义列表
a1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE", "Lisa"]

# 1.1使用in,not in关键词,而不是is
print("Lisa" in a1)  # True
print("lisa" in a1)  # False
print(11 in a1)  # False
print(11 not in a1)  # True
# 1.2使用for... in...函数
for a2 in a1:
    print(a2)  # 依次打印数组元素值

# 说明下is和in的区别之处在哪??
