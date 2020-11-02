// const { server } = require('./config');//Common JS modules
import { server } from './config';

// const registerMiddlewares = require('./middleswares');
import { rootRouter } from './routes';

import registerMiddlewares from './middleswares';

async function main() {
    registerMiddlewares(server);
    server.all('/', (req, res) => res.redirect('/v1'));
    server.use('/v1', rootRouter);
    server.listen();
}

main();