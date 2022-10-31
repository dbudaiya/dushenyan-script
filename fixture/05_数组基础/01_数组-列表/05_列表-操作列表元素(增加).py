# -*- coding:utf-8 -*-
# B站课集: P52
# 开发时间: 2021/3/13 $ 17:03

# 1.定义数组
a1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE", "Lisa"]

# 1.1使用append方法在末尾添加一个元素
a1.append("IU")  # 这里不需要去接收值,得到的数组是已经添加上去的
print(a1)

# 1.2使用extend方法在末尾至少添加一个元素
a2 = ["dushenyan", "lizhien"]
a1.extend(a2)  # 不添加任何值时会出现报错,extend() takes exactly one argument (0 givenS)
print(a1)

# 1.3使用insert方法在任意位置添加一个元素
a1.insert(1, "Suzy")  # 在索引值为1处添加裴秀智(Suzy)
print(a1)

# 1.4使用切片在任意位置添加至少一个元素
a3 = ["zhou", "en", "lai"]
a1[1:] = a3  # 在任意位置添加N个元素,后面的就忽略掉
print(a1)
