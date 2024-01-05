const { MongoClient } =  require('mongodb')

const uri = "mongodb://localhost:27017/testemongodb2"

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        console.log("Conectado a MongoDB")
        // await listDatabases(client)
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

run()

module.exports = client