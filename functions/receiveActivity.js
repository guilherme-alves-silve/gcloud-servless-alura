const pubsub = require('./pubsub')
const validateActivity = require('../validators/validateActivity')

module.exports = async function receiveActivity(resq, resp) {

    resp.type('application/json')

    const activity = resq.body

    const errors = validateActivity(activity)
    if (errors.length > 0) {
        resp.json(errors)
        return
    }

    const result = await pubsub(activity, 'activities')
    console.log(JSON.stringify(activity))
    resp.json(result)
}
