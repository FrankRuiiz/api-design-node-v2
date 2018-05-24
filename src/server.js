import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
import { EAFNOSUPPORT } from 'constants';
// Declare an app from express
const app = express();

// basic hello world rout
app.get('/', (req, res) => {
	res.json({ok: true});
});

export default app
