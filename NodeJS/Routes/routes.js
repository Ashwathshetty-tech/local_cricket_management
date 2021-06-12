const express=require('express');

var eventController=require('../Controller/eventController');
const dbUserController=require('../Controller/dbuserController');
const storage = require('../Helper/storage');
const router = express.Router();

router.get('/', eventController.getProfiles);
router.get('/admin', eventController.getPendingEvents);

router.post('/', storage, eventController.postProfile);
router.post('/user',dbUserController.postUsers);
router.put('/admin/:_id',eventController.updateProfiles);
module.exports = router;