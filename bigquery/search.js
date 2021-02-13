const BigQuery = require('@google-cloud/bigquery').BigQuery;
const bigQueryManager = new BigQuery();

module.exports = async function search(filter) {

    const options = {
        query: 'SELECT * FROM activities'
    }

    if (filter) {
        options.query = `${options.query} WHERE ${filter}`
    }

    const table = bigQueryManager.dataset('forum_alura').table('activities')
    const [work] = await table.createQueryJob(options)
    const [results] = await work.getQueryResults()
    return results
}
