function _load() {
    /*Tudo app létrehozása. Elvárás: legalább 10sor, 
    soronként 1 checkbox kipipálható, melette szöveges mező amin beírhatjuk a feladatot amit létre akarunk hozni, 
    minden sorban legyen 1 törlés gomb. bövíthető legyen 1 új feladat hozzáadása gombbal.*/

    //5. add gomb hozzáad root-on kívül insertAdjecenthtml-el (nem beforeend, hanem afterend a pozicio)
    //   rátenni a click eseményt (legyen id-ja) és létre kell hozni egy fugvényt ami egy új változót hoz létre
    //6. jelöljük ki az összes törlés gombot és azt a sort amire katt törlődjön ki (kigyüjtük az összes változót, for ciklussal végig a html elemeken és a hosszúságát vesszük alapul a for ciklusnál(max szám) és mindegyikre rakjunk rá egy kattintás esemény)
    //7. elkészített fügvényben a törlés gomb befogadó sorát kitöröljük

    //0. változóban eltároljuk a root elemünk
    let rootE = document.getElementById("root");
    
    //1. egy többsoros változóba beleírjuk a html kódot
    let htmlRow = [`
        <div class="row">
            <input type="checkbox"></input>
            <input type="text"></input>
            <button class="delete">Delete</button>
        </div>
    `];

    //2. sorok száma egy változóban
    let rowNumber = 10;

    //3. for ciklusban létrehozunk 10 sort a többsoros változóval
    for (let index = 0; index < rowNumber; index++) {
        rootE.insertAdjacentHTML("beforeend", htmlRow);
        
    }

    //4. hozzáadjuk az Add row buttont a root-on kívülre
    rootE.insertAdjacentHTML("afterend", `
    <button id="addRow">Add row</button>
    `);

    let rowButton = document.getElementById("addRow");

    function addRow_function() {
        rootE.insertAdjacentHTML("beforeend", htmlRow);
        //itt kellene hozzáadni az új elemekre a törlés függvényt 
    }

    //5. rátesszük a buttonra a click eseményt
    rowButton.addEventListener("click", addRow_function);

    let deleteButtons = rootE.querySelectorAll(".delete");

    function deleteItem(e) {
        e.target.parentElement.remove();
    }

    for (let index = 0; index < deleteButtons.length; index++) {
        deleteButtons[index].addEventListener("click", deleteItem);
    }

}

window.addEventListener("load", _load);