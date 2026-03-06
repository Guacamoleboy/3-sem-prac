import { Router } from 'express';
import { listUsers, createUser, removeUser } from '../controllers/users.controller.js';

// _______________________________________________________________

const router = Router();

// _______________________________________________________________

router.get('/', listUsers);                                 // GET /api/users
router.post('/', createUser);                               // POST /api/users
router.delete('/:id', removeUser);                          // DELETE /api/users/:id

// _______________________________________________________________

export default router;