# -*- coding:utf-8 -*-
# B站课集: P121
# 开发时间: 2021/3/13 $ 17:27

# 1.别名导入
# 将math函数换成了cos
import math as Math

print(dir(Math))
print(Math.pi)  # 得到π数

# 2.使用from ... import ...
from math import pi

print(pi)  # 得到π数
