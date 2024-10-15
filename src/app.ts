import app from './server';
import 'dotenv/config';

app.listen(process.env.PORT, () => {
  console.log('test');
});
