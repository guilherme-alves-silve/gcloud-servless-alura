const BigQuery = require('@google-cloud/bigquery').BigQuery;
const bigQueryManager = new BigQuery();

async function createTable() {
    const dataset = bigQueryManager.dataset('forum_alura');
    const [tables] = await dataset.getTables();
    const tableName = 'activities';
    const foundTables = tables.filter(function(actualTable) {
        return tableName === actualTable.id;
    });

    if (foundTables.length > 0) {
        console.log('The table was already created!');
        return;
    }

    const structure = [
        {
            name: 'created_at',
            type: 'timestamp',
            mode: 'required'
        },
        {
            name: 'activity_type',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'course_name',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'class_name',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'text',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'main_activity_id',
            type: 'integer',
            mode: 'nullable'
        },
    ];

    await dataset.createTable(tableName, {
        schema: structure
    });

    console.log('The table was successfully created!');
}

createTable();