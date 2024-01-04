// Export a middleware function
module.exports = async (ctx, next) => {
    // Middleware logic goes here
    const start = Date.now();
    // Call the next middleware
    await next();
    const duration = Date.now() - start;
    ctx.set('X-Response-Time', duration + 'ms');
};
