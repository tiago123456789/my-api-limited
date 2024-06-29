const routeConfig = require("./config.json")
const { rateLimit } = require('express-rate-limit')
const express = require("express")
const app = express()

const limiter = rateLimit({
    windowMs: (process.env.RATE_LIMIT_PERIOD || routeConfig.rateLimit.period || 5) * 1000,
    limit: (process.env.RATE_LIMIT_REQUEST_IN_PERIOD || routeConfig.rateLimit.limitRequestInPeriod || 5),
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: (req, res) => {
        res.status(429).json({
            statusCode: 429,
            timestamp: Date.now(),
            message: "Too many requests, please try again later."
        })
    }
})

app[routeConfig.httpVerb.toLowerCase() || "get"](routeConfig.route, limiter, (req, res) => {
    res.json(routeConfig.successResponse)
})

app.listen((process.env.PORT || 3000), () => {
    console.log("Server is running at http://localhost:3000")
})