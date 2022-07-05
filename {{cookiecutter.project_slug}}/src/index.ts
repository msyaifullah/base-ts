/**
 *
 */
import errorHandler from "errorhandler";
import app from "./app";
import dotenv from "dotenv";

/**
 * initialize configuration
 */
dotenv.config();

/**
 * port is now available to the Node.js runtime
 * as if it were an environment variable
 */
const port = process.env.SERVER_PORT;
const env = process.env.NODE_ENV;

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}


/**
 * Start Express server.
 */
const server = app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("App is running at http://localhost:%d in %s mode", port, env);
    // tslint:disable-next-line:no-console
    console.log("Press CTRL-C to stop\n");
});

export default server;
