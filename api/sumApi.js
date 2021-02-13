const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const application = new Koa()
const BigQuery = require('@google-cloud/bigquery').BigQuery
const bigQueryManager = new BigQuery()
const table = bigQueryManager.dataset('forum_alura').table('activities')

async function executeQuery(query) {
    const options = {
        query: query
    }

    const [work] = await table.createQueryJob(options)
    const [results] = await work.getQueryResults()
    return results
}

application.use(bodyParser())
application.use(async function(context) {

    const querySumByCourse = 'SELECT COUNT(*) AS count_by_course, course_name FROM forum_alura.activities GROUP BY course_name'
    const querySumByClass = 'SELECT COUNT(*) AS count_by_class, class_name FROM forum_alura.activities GROUP BY class_name;'

    context.status = 200
    context.body = {
        sumByCourse: await executeQuery(querySumByCourse),
        sumByClass: await executeQuery(querySumByClass)
    }
})

application.listen(3001)
console.log('The application sumApi has started!')