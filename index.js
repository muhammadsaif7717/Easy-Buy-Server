const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const app = express();
require('dotenv').config();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oh0s98i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


let usersCollection;
let productsCollection;
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();


        usersCollection = client.db('SCICJobTask2DB').collection('users')
        productsCollection = client.db('SCICJobTask2DB').collection('products')


        // jwt related API
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
            res.send({ token })
        })

        //users related API's
        app.get('/users', async (req, res) => {
            res.send(await usersCollection.find().toArray())
        })
        app.post('/users', async (req, res) => {
            let user = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPin = await bcrypt.hash(user.pin, salt);
            user = {
                name: user.name,
                pin: hashedPin,
                emailOrPhone: user.emailOrPhone,
                balance: 0,
                status: 'pending',
            }
            res.send(await usersCollection.insertOne(user))
        })

        // products related API's
        app.get('/products', async (req, res) => {
            const products = await productsCollection.find().toArray();
            res.send({ products });
        });

        // app.get('/products', async (req, res) => {
        //     const page = parseInt(req.query.page) || 1; 
        //     const limit = parseInt(req.query.limit) || 10; 
        //     const skip = (page - 1) * limit;

        //     try {
        //         const totalProducts = await productsCollection.countDocuments();
        //         const products = await productsCollection.find()
        //             .skip(skip)
        //             .limit(limit)
        //             .toArray();

        //         res.send({
        //             products,
        //             totalProducts,
        //             totalPages: Math.ceil(totalProducts / limit),
        //             currentPage: page
        //         });
        //     } catch (err) {
        //         res.status(500).send({ error: err.message });
        //     }
        // });



        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => res.send("Server is running"));

app.listen(port, () => console.log("Server is running on port: ", port));

module.exports = app;