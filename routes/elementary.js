import express from 'express';
import { elementaryRoute } from '../controllers/elementary.js';
import {authProtect} from '../middleware/authMiddleware.js'

const _router = express.Router();

_router.route("/").get(authProtect, elementaryRoute);

export default _router;