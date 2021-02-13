const PubSub = require('@google-cloud/pubsub').PubSub
const pubsubManager = new PubSub()

module.exports = function pubsub(value, topicName) {
    
    if(typeof value !== 'string') {
        value = JSON.stringify(value)
    }

    const convertedValue = Buffer.from(value)
    return pubsubManager.topic(topicName).publish(convertedValue)
}
