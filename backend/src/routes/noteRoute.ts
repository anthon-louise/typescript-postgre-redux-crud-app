import { Router } from "express";
import * as controller from '../controllers/noteController.js'

const router = Router()

router.post('/', controller.addNote)
router.get('/', controller.getAllNotes)

export default router