# -*- coding:utf-8 -*-
# B站课集: P13
# 开发时间: 2021/3/13 $ 14:57

# 1.浮点类型 float => 3.14159
# 浮点值计算用法
a1 = 3.14846465468468465
a2 = 2.37546546516546465
print(a1 + a2)  # 5.52393011985 计算值不对,出错

# 2.1导入模块decimal
from decimal import Decimal

# 2.2使用方法Decimal
print(Decimal("3.14846465468468465") + Decimal("2.37546546516546465"))  # 5.52393011985014930
