const BigQuery = require('@google-cloud/bigquery').BigQuery;
const bigQueryManager = new BigQuery();

module.exports = function insert(lines) {
    const dataset = bigQueryManager.dataset('forum_alura');
    const table = dataset.table('activities');
    return table.insert(lines);
}