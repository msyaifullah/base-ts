import * as shell from "shelljs";

/**
 * Copy all the view templates to dist
 */
shell.cp( "-R", "src/views", "dist/" );
