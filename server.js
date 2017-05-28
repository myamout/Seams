import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.static(__dirname + '/dist'));
app.use('/scripts', express.static(__dirname + '/node_modules/wingcss/dist'));
app.listen(3000);
console.log('[+] Server running on port 3000...');
