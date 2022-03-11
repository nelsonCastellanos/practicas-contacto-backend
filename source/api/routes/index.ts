import { Router } from 'express'
import { checkJwt } from '../../configs/utils/checkJwt';
import { LibraryRouter } from './libraryRouter';
import { UserRouter } from './userRouter';

const router = Router();
router.use('/library', [checkJwt], new LibraryRouter().router);
router.use('/user', new UserRouter().router);

export default router