const insert = require('../bigquery/insert')

module.exports = async function insertActivity(event) {
    try {
        const codedActivity = event.data
        const json = Buffer.from(codedActivity, 'base64').toString()
        const activity = JSON.parse(json)
        const result = await insert(activity)
        console.log('result: ', JSON.stringify(result))
    } catch (exception) {
        console.error('error: ', JSON.stringify(exception))
        console.log('error msg: ', exception.response)
    }
}