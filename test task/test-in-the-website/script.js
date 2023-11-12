function calculateProduction() {
    var popyt = parseInt(document.querySelector('.demand').value);
    var podaż = parseInt(document.querySelector('.supply').value);
    var faktycznaProdukcja = parseInt(document.querySelector('.actualProduction').value);
    var potencjalnaProdukcja = parseInt(document.querySelector('.potentialProduction').value);

    var wynikProdukcji = document.querySelector('.productionResult');

    if (faktycznaProdukcja < potencjalnaProdukcja) {
        if (popyt >= podaż) {
            faktycznaProdukcja = popyt;
        } else {
            faktycznaProdukcja = podaż;
        }
    } else {
        wynikProdukcji.innerHTML = "Faktyczna produkcja jest już równa lub przekracza poziom potencjalny.";
        return;
    }

    wynikProdukcji.innerHTML = "Rzeczywista wielkość produkcji: " + faktycznaProdukcja;

}
