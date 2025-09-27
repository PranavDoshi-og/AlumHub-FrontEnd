document.addEventListener('DOMContentLoaded', () => {
    const selectionCards = document.querySelectorAll('.selection-card');

    selectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const userType = card.dataset.type;
            let targetPage = '';
            if (userType === 'administration') {
                targetPage = 'admin.html';
            } else {
                targetPage = `${userType}.html`;
            }
            window.location.href = targetPage;
        });
    });
});