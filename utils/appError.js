class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.statusCode = status;
        this.status = `${status}`.startsWith('4') ? 'fail' : 'error'; 
        
        Error.captureStackTrace(this, this.constructor);
    }

}

module.exports = AppError