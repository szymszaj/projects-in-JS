popyt =  12
podaż =  15
faktyczna_produkcja =  0
potencjalna_produkcja =  22

# Początkowy warunek
if faktyczna_produkcja < potencjalna_produkcja:
    if popyt >= podaż:
        # Jeśli popyt jest większy lub równy podaży, produkcja jest determinowana przez popyt
        faktyczna_produkcja = popyt
    else:
        # W przeciwnym przypadku, gdy popyt jest mniejszy od podaży, produkcja jest mniejsza niż poziom potencjalny
        # W tym przypadku przedsiębiorstwa dostarczają tylko tyle produkcji, ile jest zapotrzebowania
        faktyczna_produkcja = podaż
else:
    print("Faktyczna produkcja jest już równa lub przekracza poziom potencjalny.")
    # Dodaj tutaj odpowiednie instrukcje, które mają być wykonane, gdy produkcja jest równa lub większa od poziomu potencjalnego.

# Wyświetlenie faktycznej wielkości produkcji
print("Faktyczna wielkość produkcji:", faktyczna_produkcja)
