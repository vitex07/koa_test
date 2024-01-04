// Koa中间件函数
const koaResponseHeader = async (ctx, next) => {
    // 设置响应头
    ctx.set('Content-Type', 'application/json');
    ctx.set('Access-Control-Allow-Origin', '*');
    
    // 继续执行下一个中间件或路由处理程序
    await next();
};

// 导出中间件函数
module.exports = koaResponseHeader;
