import path from 'path';
import express from 'express';
import webpack from 'webpack';
import reactApp from '../app/server.js';
import configDev from '../webpack/webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

if(process.env.NODE_ENV === 'development') {
	const compiler = webpack(configDev);

	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: configDev.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(webpackHotMiddleware(compiler));
	app.use(express.static(path.resolve(__dirname, '..', 'app', 'static')));
} else if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, '..', 'build')));
}

app.get('*', reactApp);

app.listen(3000, '0.0.0.0', (err) => {
	if(err) {
		console.error(err); // eslint-disable-line no-console
	} else {
		console.info('Listening at http://localhost:3000'); // eslint-disable-line no-console
	}
});
