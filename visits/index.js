const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
// redis-server is the name of the docker container specified in the docker-compose.yml.
// When the containers are being deployed each container's ip can be resolved
// using its name
// 6379 is the default redis port
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {

    // This is here so that the container can exit and simulate a crash of an app
    process.exit(0)

  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
