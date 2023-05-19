import * as server from './services';
import { PORT } from './config';

(() => {
  server.app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`));
})();

process.on('SIGINT', async () => {
  process.exit();
});
