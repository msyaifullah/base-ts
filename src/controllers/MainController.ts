"use strict";
import {Response, Request} from "express";

/**
 * List of API examples.
 * @route GET /api/contacts
 */
export const getHealth = (req: Request, res: Response) => {
    res.status(200).json({
        title: "Health API",
        profile: []
    });
};
