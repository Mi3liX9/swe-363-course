import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';

app.post('/test', (req, res) => {
    // I use this to return some endpoints from express
    res.send('POST request to the test endpoint');
});

//   The rest of the pages will be rendered using Astro framework :)
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

app.listen(8080);