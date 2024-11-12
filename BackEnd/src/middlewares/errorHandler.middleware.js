const { ApiError } = require("../utils/ApiError")

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"
  const errors = err.errors || null

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    errors: errors,
  })
}

module.exports = { errorHandler }
