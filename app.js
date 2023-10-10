import express from 'express';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));

app.get('/hello', (req, res) => {
    const name = req.query.name;
    res.type('html')
    res.send(`
        <html>
            <head>
                <title>Hello ${name}</title>
            </head>
            <body>
                <h1>Hello ${name}!</h1>
            </body>
        </html>
    `);
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});