/**
 * Mermaid 主题配置 - 与课程页面主题色 #10B981 保持一致
 */
document.addEventListener("DOMContentLoaded", function () {
  // 等待 Mermaid 初始化完成后再覆盖主题
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) {
          // 查找新渲染的 Mermaid SVG
          var svg = node.querySelector ? node.querySelector('.mermaid svg') : null;
          if (!svg && node.classList && node.classList.contains('mermaid')) {
            svg = node.querySelector('svg');
          }
          if (svg) {
            applyMermaidTheme(svg);
          }
        }
      });
    });
  });

  // 监听整个文档
  observer.observe(document.body, { childList: true, subtree: true });

  // 也处理已存在的 Mermaid SVG
  document.querySelectorAll('.mermaid svg').forEach(function (svg) {
    applyMermaidTheme(svg);
  });
});

function applyMermaidTheme(svg) {
  // 节点矩形样式：浅绿填充、主题色描边、圆角
  svg.querySelectorAll('.node rect, .node polygon').forEach(function (el) {
    var fill = el.getAttribute('fill');
    // 只对默认色的节点应用主题（保留特殊节点如开始/结束等）
    if (!fill || fill === '#ECECFF' || fill === '#ececff' || fill.match(/^#[dDeE]/)) {
      el.setAttribute('fill', 'rgba(16, 185, 129, 0.08)');
      el.setAttribute('stroke', 'rgba(16, 185, 129, 0.35)');
      el.setAttribute('stroke-width', '1.5');
      if (el.tagName === 'rect') {
        el.setAttribute('rx', '8');
        el.setAttribute('ry', '8');
      }
    }
  });

  // 节点文本颜色
  svg.querySelectorAll('.nodeLabel, .label text, .node text').forEach(function (el) {
    el.setAttribute('fill', '#1F2937');
  });

  // 边/连线颜色
  svg.querySelectorAll('.edgePath .path, .flowchart-link').forEach(function (el) {
    el.setAttribute('stroke', 'rgba(16, 185, 129, 0.5)');
    el.setAttribute('stroke-width', '1.2');
  });

  // 箭头标记颜色
  svg.querySelectorAll('marker path, .marker').forEach(function (el) {
    el.setAttribute('fill', 'rgba(16, 185, 129, 0.6)');
  });
}
