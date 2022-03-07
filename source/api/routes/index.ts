import { Router } from 'express'
import { LibraryRouter } from './libraryRouter';
import { UserRouter } from './userRouter';

const router = Router();
router.use('/library', new LibraryRouter().router);
router.use('/user', new UserRouter().router);

export default router