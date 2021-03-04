# Foobar

This is Example AutoComplete

# Author

 **By Neikas**

live coming soon

## Installation

```bash
git clone
npm install
npm run start
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
- [x] Dizainą įgyvendinti kuo panašesnį į pateiktą žemiau. Pikselių nematuosime, tačiau į centravimą ir bendrą išdėstymą atsižvelgsime. ( Nesu profesionalas su Tailwind tik pradedu, tikiuosi suprasit (:  )
- [x]Stiliaus aprašus stenkitės išlaikyti tvarkingus, vengiant nereikalingų komandų. 
- [x]Paieškos langas turi leisti įvesti paieškos tekstą ir pateikti galimus variantus ( gali būti ir be API pajungimo, tiesiog statiniai duomenys)
### TASK 1
- [x] Stilių aprašams naudoti modernius stiliaus įrankius kaip PostCSS ar SASS.
- [x] Komponentas turi naudoti informaciją, gaunamą dinamiškai iš filmų duomenų API: GET: https://api.themoviedb.org/3/search/movie?api_key=**{api_raktas}**&language=en-US&query=**{paieškos_tekstas}**
- [x] Pasirinkus vieną iš rezultatų, komponento įvesties tekstas turi atsinaujinti pagal pasirinkimą.
- [x] Maksimalus rodomas dinaminės paieškos rezultatų kiekis - 8 filmų įrašai.
- [x] Minimalus simbolių kiekis, aktyvuojantis dinaminę paiešką - 3. Jeigu ši sąlyga tenkinama, bet koks simbolio pakeitimas panaikina buvusius rezultatus ir iš naujo aktyvuoja dinaminę paiešką.
- [x] Papildomas pliusas bus jeigu naudosite debounce funkciją apsisaugot nuo nereikalingų užklausų į filmų bazę. Taip pat papildomi taškai gali būt skiriami, jei padarysite error handling ar loadinimą.

## License
[MIT](https://choosealicense.com/licenses/mit/)