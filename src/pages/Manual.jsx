import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Manual = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Manual</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='manual'>
                        <h4 id="manual-label">Manual</h4>
                        <div>
                            <p id="sub-heading" className="common">Standard Rules </p>:
                            <p id="description" className="common">
                                Each player has nine pieces (hence the name, Nine Men's Morris) which are placed and moved on the line crossings of the board. Whenever three pieces of the same color are placed in a straight row, a mill is closed and one opponent piece may be removed. The goal of the game is to reduce the opponent to only two pieces (such that he cannot form a mill anymore), or to surround the opponent pieces in such a way that there are no valid moves for the opponent.
                                The game proceeds in three distinct phases (opening, midgame, and endgame). Unlike chess, these phases are distinguished by special rules for each phase.
                                Opening - Setting pieces
                                The white player begins. Each player places one piece on an unoccupied position on the board in turns. If a mill is closed by setting a piece, the player may take one of the opponent's pieces. Once all pieces are set, the midgame starts.
                                Midgame - Moving pieces
                                Each player moves one piece along the lines to a free, neighboring position. Again, if the move results in closing a mill, one of the opponent's pieces may be removed. Note that a player must move a piece in each turn. If there is no legal move, the player has lost.
                                Endgame - Flying
                                If a player has only three pieces left, he my jump (or fly) with one piece to any unoccupied position instead of moving only along the board lines.
                            </p>

                            <p id="sub-heading" className="common">Rule Details and Game Variations</p>
                            <p id="description" className="common">
                                Some of these rules are often interpreted differently, such that a variety of rule variants exist. This game tries to support most of them. In particular, the following rule variations are supported:
                                Taking from opponent mills: when a mill is closed, one opponent stone may be taken. However, usually, it is not allowed to take a piece from an opponent's mill, if he still has pieces that are not part of a mill. If you want, you can also allow to take pieces from an opponent's mill. Note that you can always take pieces from an opponent's mill, if all of his pieces are within mills.
                                Multiple mills: in the setting phase, it may happen that two mills are closed simultaneously. In the multiple-mills variations, the player may take two opponent pieces, in this case.
                                Flying: some people prefer to omit the flying rule, such that only standard moves may be conducted, even when a player is down to only three pieces.
                                Lasker variant (proposed by the chess grandmaster Emanuel Lasker): there is no difference between opening and midgame. I.e., a player may decide to move a piece instead of setting a new piece. Usually, this variant is played with 10 pieces instead of only 9.
                                Remis: if the same board situation appeared for N times (with N usually 3), the game is declared remis.
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Done</Button>
                </Modal.Footer>
            </Modal>
        </div>

        // <div className="manual">
        //     <p id='heading'>Manual</p>
            // <div>
            //     <p id="sub-heading" class="common">Standard Rules </p>:
            //     <p id="description" class="common">
            //         Each player has nine pieces (hence the name, Nine Men's Morris) which are placed and moved on the line crossings of the board. Whenever three pieces of the same color are placed in a straight row, a mill is closed and one opponent piece may be removed. The goal of the game is to reduce the opponent to only two pieces (such that he cannot form a mill anymore), or to surround the opponent pieces in such a way that there are no valid moves for the opponent.
            //         The game proceeds in three distinct phases (opening, midgame, and endgame). Unlike chess, these phases are distinguished by special rules for each phase.
            //         Opening - Setting pieces
            //         The white player begins. Each player places one piece on an unoccupied position on the board in turns. If a mill is closed by setting a piece, the player may take one of the opponent's pieces. Once all pieces are set, the midgame starts.
            //         Midgame - Moving pieces
            //         Each player moves one piece along the lines to a free, neighboring position. Again, if the move results in closing a mill, one of the opponent's pieces may be removed. Note that a player must move a piece in each turn. If there is no legal move, the player has lost.
            //         Endgame - Flying
            //         If a player has only three pieces left, he my jump (or fly) with one piece to any unoccupied position instead of moving only along the board lines.
            //     </p>

            //     <p id="sub-heading" class="common">Rule Details and Game Variations</p>
            //     <p id="description" class="common">
            //         Some of these rules are often interpreted differently, such that a variety of rule variants exist. This game tries to support most of them. In particular, the following rule variations are supported:
            //         Taking from opponent mills: when a mill is closed, one opponent stone may be taken. However, usually, it is not allowed to take a piece from an opponent's mill, if he still has pieces that are not part of a mill. If you want, you can also allow to take pieces from an opponent's mill. Note that you can always take pieces from an opponent's mill, if all of his pieces are within mills.
            //         Multiple mills: in the setting phase, it may happen that two mills are closed simultaneously. In the multiple-mills variations, the player may take two opponent pieces, in this case.
            //         Flying: some people prefer to omit the flying rule, such that only standard moves may be conducted, even when a player is down to only three pieces.
            //         Lasker variant (proposed by the chess grandmaster Emanuel Lasker): there is no difference between opening and midgame. I.e., a player may decide to move a piece instead of setting a new piece. Usually, this variant is played with 10 pieces instead of only 9.
            //         Remis: if the same board situation appeared for N times (with N usually 3), the game is declared remis.
            //     </p>
            // </div>
        // </div>
    )
}

export default Manual;