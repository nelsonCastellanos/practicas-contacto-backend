import { Router } from 'express'
import { LibraryRouter } from './libraryRouter';

const router = Router();

router.use('/library', new LibraryRouter().router);

export default router