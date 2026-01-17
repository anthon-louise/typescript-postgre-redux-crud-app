import { Router } from "express";
import * as controller from '../controllers/noteController.js'

const router = Router()

router.post('/', controller.addNote)
router.get('/', controller.getAllNotes)
router.delete('/:id', controller.removeNote)

export default router