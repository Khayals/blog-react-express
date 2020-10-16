import App from './src/app';
const port:number = 8080;
const app = new App().app;
app.listen(port);