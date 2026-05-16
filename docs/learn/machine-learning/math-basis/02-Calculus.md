---
title: Calculus「微积分」
createTime: 2025/09/17 22:50:49
permalink: /learn/984t18vg/
icon: tabler:math-integral-x
status: writing
---

- Video Resource: [https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M](https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M)

## ECharts 3D Surface Plot Example

::: echarts 3D Curve Surface Plot Example
```js
await window.__echartsGlReady;

var data = [];
var min = -1, max = 1, step = 0.05;
for (var x = min; x <= max; x += step) {
    for (var y = min; y <= max; y += step) {
        var z = Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
        data.push([x, y, z]);
    }
}

option = {
    tooltip: {},
    backgroundColor: 'transparent',
    visualMap: {
        show: false,
        dimension: 2,
        min: -1,
        max: 1,
        inRange: {
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ]
        }
    },
    xAxis3D: { type: 'value' },
    yAxis3D: { type: 'value' },
    zAxis3D: { type: 'value' },
    grid3D: {
        viewControl: {},
        boxHeight: 80
    },
    series: [{
        type: 'surface',
        wireframe: {},
        data: data
    }]
};

setTimeout(function () {
    var dom = myChart.getDom();
    var wrapper = dom.parentElement;
    wrapper.style.position = 'relative';

    var btnCss = 'padding:4px 8px;cursor:pointer;border:1px solid #ccc;border-radius:4px;background:rgba(255,255,255,0.85);font-size:12px;line-height:1.4';
    var bar = document.createElement('div');
    bar.style.cssText = 'position:absolute;top:6px;right:6px;z-index:10';
    wrapper.appendChild(bar);
}, 100);

```
:::

:::echarts
```js
await window.__echartsGlReady;

var data = [];
for (var i = 0; i <= 20; i++) {
    for (var j = 0; j <= 20; j++) {
        for (var k = 0; k <= 20; k++) {
            var value = Math.sin(i / 3) * Math.cos(j / 3) * Math.sin(k / 3)
                      + Math.cos(i / 5) * Math.sin(j / 5) * Math.cos(k / 5)
                      + 4;
            data.push([i, j, k, value]);
        }
    }
}

option = {
    visualMap: {
        show: false,
        min: 2,
        max: 6,
        inRange: {
            symbolSize: [0.5, 25],
            color: [
                '#313695', '#4575b4', '#74add1', '#abd9e9',
                '#e0f3f8', '#ffffbf', '#fee090', '#fdae61',
                '#f46d43', '#d73027', '#a50026'
            ],
            colorAlpha: [0.2, 1]
        }
    },
    xAxis3D: { type: 'value' },
    yAxis3D: { type: 'value' },
    zAxis3D: { type: 'value' },
    grid3D: {
        axisLine: { lineStyle: { color: '#fff' } },
        axisPointer: { lineStyle: { color: '#fff' } }
    },
    series: [{
        type: 'scatter3D',
        data: data
    }]
};
```
:::