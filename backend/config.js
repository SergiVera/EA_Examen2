module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://mongo:27017/station-service'
}
