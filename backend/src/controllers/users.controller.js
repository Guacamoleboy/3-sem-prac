import * as UsersService from '../services/users.service.js';
import * as HandlerUtil from '../utils/handler.js';

// _________________________________________________________
// ALL

export const listUsers = HandlerUtil.asyncHandler(async (req, res) => {
    const users = await UsersService.getAllUsers();
    HandlerUtil.successResponse(res, users);
});

// _________________________________________________________
// CREATE

export const createUser = HandlerUtil.asyncHandler(async (req, res) => {
    const missing = HandlerUtil.validateFields(req.body, ['name', 'email']);

    if (missing.length) 
        return HandlerUtil.errorResponse(res, `Missing fields: ${missing.join(', ')}`, 400);

    const user = await UsersService.addUser(req.body.name, req.body.email);
    HandlerUtil.successResponse(res, user, 201);
});

// _________________________________________________________
// DELETE

export const removeUser = HandlerUtil.asyncHandler(async (req, res) => {
    const { id } = req.params;

    const success = await UsersService.deleteUser(id);

    // Validation
    if (!success) {
        return HandlerUtil.errorResponse(res, 'User not found', 404);
    }

    HandlerUtil.successResponse(res, { success: true });
});