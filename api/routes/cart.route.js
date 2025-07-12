import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import { addToCart, getCart } from '../controllers/cart.controller.js';

const router  = express.Router();
console.log('cart route called')

router.get('/',verifyToken,getCart);
router.post('/addToCart',verifyToken,addToCart);

export default router;