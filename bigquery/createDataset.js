const BigQuery = require('@google-cloud/bigquery').BigQuery;
const bigQueryManager = new BigQuery();

async function createDataset() {
    const [datasets] = await bigQueryManager.getDatasets();
    const datasetName = 'forum_alura';
    const filteredDataset = datasets.filter(function(actualDateset) {
        return datasetName === actualDateset.id;
    });

    if (filteredDataset.length > 0) {
        console.log('This dataset was already created!');
        return;
    }

    await bigQueryManager.createDataset(datasetName);
    console.log('Dataset ' + datasetName + ' was created!');
}

createDataset();