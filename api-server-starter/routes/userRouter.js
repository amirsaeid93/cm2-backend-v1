const express = require('express');
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userControllers');

const router = express.Router();

router.post('/', (req, res, next) => {
  console.log('POST /api/users');
  next();
}, createUser);

router.get('/', (req, res, next) => {
  console.log('GET /api/users');
  next();
}, getUsers);

router.get('/:id', (req, res, next) => {
  console.log(`GET /api/users/${req.params.id}`);
  next();
}, getUser);

router.put('/:id', (req, res, next) => {
  console.log(`PUT /api/users/${req.params.id}`);
  next();
}, updateUser);

router.delete('/:id', (req, res, next) => {
  console.log(`DELETE /api/users/${req.params.id}`);
  next();
}, deleteUser);

module.exports = router;