import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    
    const heroes = `
        SELECT * 
        FROM heroes2
    `;

    MySQL.ejecutarQuery(heroes, (error: any, heroes: Object[]) => {
        if (error) {   
            res.status(400).json({
                ok: false,
                error,
            });
        } else {
            res.json({
                ok: true,
                heroes,
            })
        }
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const escapeId = MySQL.instance.cnn.escape(id);

    const heroe = `
        SELECT * 
        FROM heroes
        WHERE id = ${escapeId} 
    `;

    MySQL.ejecutarQuery(heroe, (error: any, heroe: Object[]) => {
        if (error) {   
            res.status(400).json({
                ok: false,
                error,
            });
        } else {
            res.json({
                ok: true,
                heroe: heroe[0],
            });
        }
    });
});

export default router;