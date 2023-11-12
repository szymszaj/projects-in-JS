var popyt = 130; // Przykładowa wartość popytu
var podaż = 100; // Przykładowa wartość podaży
var faktycznaProdukcja = 50; // Przykładowa początkowa wartość faktycznej produkcji
var potencjalnaProdukcja = 800; // Przykładowa wartość poziomu potencjalnego


if (faktycznaProdukcja < potencjalnaProdukcja) {
    if (popyt >= podaż) {
        // Jeśli popyt jest większy lub równy podaży, produkcja jest determinowana przez popyt
        faktycznaProdukcja = popyt;
    } else {
        // W przeciwnym przypadku, gdy popyt jest mniejszy od podaży, produkcja jest mniejsza niż potencjalna
        // W tym przypadku przedsiębiorstwa dostarczają tylko tyle produkcji, ile jest zapotrzebowania
        faktycznaProdukcja = podaż;
    }
} else {
    console.log("Faktyczna produkcja jest już równa lub przekracza poziom potencjalny.");
}

// Komenda kończąca program
console.log("Faktyczna wielkość produkcji: " + faktycznaProdukcja);
