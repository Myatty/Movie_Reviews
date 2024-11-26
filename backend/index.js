const app = require('./server');
const mongodb = require("mongodb");
const dotenv = require('dotenv')

async function main(){

    const client = new mongodb.MongoClient(
        process.env.MOVIEREVIEWS_DB_URI
    )

    const port = process.env.PORT || 8000;

    try{
        //Connect to Mongodb Cluster
        await client.connect();

        app.listen(port, ()=> {
            console.log("Server is running on PORT " + port);
        })

    }catch(e){
        console.error(e);
        process.exit(1);
    }
}

main().catch(console.error);