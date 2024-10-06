DO MIESTA ODOVZDANIA IBA priezvisko-mod.js, NEODOVZDAVATE ANI NEMENITE INE SUBORY
V HLAVICKE SUBORU UVEDTE SVOJE MENO A PRIEZVISKO
PRI NESPLNENI PREDOSLYCH BODOV ZADANIE NEBUDE HODNOTENE = 0b

```js
/**
 * u1 - Roman Bronis
 */
```

# Uloha

Cielom ulohy je modifikovat hru podla zadanych kriterii.
Prerobte hru, aby namiesto HTML tabuliek vyuzivala HTML Canvas, ktoreho obsah bude vykreslovany pomocou JS funkcii.
Vsetky farebne policka nahradte obrazkami reprezentujucimi dane objekty. Pouzite obrazky s CC licenciou (alebo ekvivalentnou, umoznujucou modifikaciu pre non-profit organizacie).
Zmente ovladanie v hre, aby reagovala nielen na sipky, ale aj na A a D.
Pridajte zvukovu stop, pricom pri jej licencii su pokyny ako u obrazkov.
Pridajte tlacidlo resetu stavu hry a zobrazenie informacii o stave hry (rychlost, score)
Pridajte tlacidlo debug a nastavitelne (daju sa vypnut a zapnut) debug vypisy, ktore sa zacnu zobrazovat po stlaceni DEBUG tlacidla

| #   | Done | Uloha                                                                                                                                                  | Body   |
| --- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| 1.  | x    | mod.js bude prepisovat IBA potrebne funkcie                                                                                                            | 1      |
| 2.  | x    | pridanie \<canvas> do HTML suboru pouzitim JS funkcii                                                                                                  | 1      |
| 3.  | x    | dynamicke pouzitie obrazkov z externych zdrojov (http...) a ich vykreslovanie ako policok pomocou JS funkcii (u obrazkov musite udat zdroj a licenciu) | 1      |
| 4.  | x    | hra je vykreslovana a animovana pomocou JS funkcii                                                                                                     | 1      |
| 5.  | x    | pridanie zmeny ovladania klavesnicou                                                                                                                   | 1      |
| 6.  | x    | pridanie funkcnych tlacidiel na zapnutie a vypnutie hudobnej stopy na pozadi (licencia a zdroj ako u obrazkov)                                         | 1      |
| 7.  | x    | pridanie zobrazeni a aktualneho skore a rychlosti                                                                                                      | 1      |
| 8.  | ?    | pridanie tlacidla reset, ktore resetuje stav hry (reset vykonat cez event listener, hra je znovu hratelna, reset nie je refresh)                       | 1      |
| 9.  | x    | pridanie debug vypisov v debugovacom mode                                                                                                              | 1      |
| 10. | x    | optimalizacia                                                                                                                                          | 1      |
|     |      | **SUM**                                                                                                                                                | **10** |

Kazdy student zodpoveda za vypracovanie samostatne. V pripade akychkolvek nejasnosti v zadani je povinnostou studenta ich konzultovat s garantom predmetu a to pred odovzdanim do miesta odovzdania. V pripade, ze student objavi nejasnost zadania po odovzdani ma vyucujuci pravo nepridelit body za danu funkcionalitu alebo projekt podla svojho zhodnotenia. (priklad: "...ja som to pochopil tak, ze...")
