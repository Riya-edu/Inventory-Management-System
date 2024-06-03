import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request){
    
    return NextResponse.json({"a":34})
}
/*
const uri = "mongodb+srv://riya-inveesync:riya-inveesync@cluster0.vvdl7v6.mongodb.net/";
const client = new MongoClient(uri);
async function run(){
    try{
        const database = client.db('Riya-InveeSync');
        const m = database.collection('inventory');

        const query = {};
        const ms = await m.find(query).toArray();
        console.log(ms);
        return NextResponse.json({"a":34})
    }
    finally{
        await client.close();
    }
}
}*/