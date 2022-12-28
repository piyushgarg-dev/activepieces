import {pieces} from "pieces/dist/src/apps";
import {Piece} from "pieces/dist/src/framework/piece";
import {PropsValue, Context} from "pieces";


export class PieceExecutor {
    public async exec(pieceName: string, actionName: string, config: PropsValue) {
        const piece = this.getPiece(pieceName);

        return await piece.getAction(actionName)!.run({
            propsValue: config
        });
    }

    private getPiece(pieceName: string): Piece {
        const piece = pieces.find(app => app.name === pieceName);
        if (!piece) {
            throw new Error(`error=piece_not_found piece_name=${pieceName}`);
        }
        return piece;
    }
}
