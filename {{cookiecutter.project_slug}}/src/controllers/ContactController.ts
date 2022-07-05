"use strict";
import {Response, Request, NextFunction} from "express";
import {UserDocument} from "../models/User";


/**
 * List of API examples.
 * @route GET /api/contacts
 */
export const getContacts = (req: Request, res: Response) => {
    res.status(200).json({
        title: "Contacts API",
        profile: []
    });
};

/**
 * Contact API example.
 * @route GET /api/contact
 */
export const getContact = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        title: "Contact API",
        profile: {}
    });
};

/**
 * Contact API example.
 * @route GET /api/contact
 */
export const postContact = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body as UserDocument;

    res.status(200).json({
        title: "Contact API Push",
        profile: user
    });
};
