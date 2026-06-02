---
url: /learn/math/linear-algebra/index.md
---
[MIT Course 18.06 Linear Algebra](https://www.bilibili.com/video/BV1rH4y1N7BW) 是麻省理工学院开设的一门线性代数课程，课程内容涵盖了线性代数的基础知识和应用，包括矩阵运算、向量空间、特征值和特征向量等。该课程由 Gilbert Strang 教授讲授，他是线性代数领域的权威专家，课程内容深入浅出，适合初学者和有一定基础的学习者。

## Chap01 - 方程组的几何解释

@[bilibili p1](BV1rH4y1N7BW)

假如有以下方程组：

$$\begin{cases}2x-y=0\\-x+2y=3&\end{cases}$$

我们可以把它写成矩阵的形式：

$$\begin{bmatrix}2&-1\\-1&2\end{bmatrix}\begin{bmatrix}x\y\end{bmatrix}=\begin{bmatrix}0\3\end{bmatrix}$$

换一种理解方式，我们可以把它们看成是二维空间中的两个列向量 $\overrightarrow{col\_{1}}=(2,-1)$
和 $\overrightarrow{col\_{2}}=(-1,2)$
，对于列向量 $\begin{bmatrix}2\\-1\end{bmatrix}$
和 $\begin{bmatrix}-1\2\end{bmatrix}$
，方程组就可以看成是这两个向量的「线性组合 *linear combination*
」，等于 $\begin{bmatrix}0\3\end{bmatrix}$，也就是

$$x\begin{bmatrix}2\\-1\end{bmatrix} + y\begin{bmatrix}-1\2\end{bmatrix}=\begin{bmatrix}0\3\end{bmatrix}$$

:::note 行向量的线性组合
国内教程多使用行向量进行计算，即 $\begin{bmatrix}2&-1\\-1&2\end{bmatrix}\begin{bmatrix}x\y\end{bmatrix}=\begin{bmatrix}a\b\end{bmatrix}$
行向量的线性组合表示为 $2x-y=a$，$-x+2y=b$，这样的表示方式在计算机科学中更为常见，而在数学领域则更倾向于使用列向量进行表示。
:::

我们把系数矩阵 $\begin{bmatrix}2&-1\\-1&2\end{bmatrix}$ 记为 $A$
，未知数向量 $\begin{bmatrix}x\y\end{bmatrix}$ 记为 $\mathbf{x}$
，常数向量 $\begin{bmatrix}0\3\end{bmatrix}$ 记为 $\mathbf{b}$，那么方程组就可以写成：

$$A\mathbf{x}=\mathbf{b}$$

## Chap02 - 矩阵消元

@[bilibili p2](BV1rH4y1N7BW)
