import {MongoClient} from 'mongodb';

export async function connectToMongodb(){
    const client = await MongoClient.connect('XXX');

    return client;
}