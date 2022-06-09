import { showModal } from "./modal";
export function showWinnerModal(fighter) {
    const winnerInfo = {
        title: '...And The WINNER!',
        bodyElement: fighter.name
    }

    showModal(winnerInfo);
}