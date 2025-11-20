let rememberBox = document.getElementById('rememberBox');
let taskLoeschenOverlay = document.getElementById("taskLoeschenOverlay");

let lessons = JSON.parse(localStorage.getItem('newLessons'));


function generateRemember() {
    let outputString = ``;
    if (!lessons) { // Wenn 'names' nicht vorhanden ist, initialisiere mit Standardwerten
        lessons = [
            {
                yogaArt: -1,
                day: "TEST",
                time: -1,
                uName: "Test",
                remember: false
            },
            {
                yogaArt: -1,
                day: "TEST",
                time: -1,
                uName: "Test",
                remember: false
            },
            {
                yogaArt: -1,
                day: "TEST",
                time: -1,
                uName: "Test",
                remember: false
            },
            {
                yogaArt: -1,
                day: "TEST",
                time: -1,
                uName: "Test",
                remember: false
            },
            {
                yogaArt: -1,
                day: "TEST",
                time: -1,
                uName: "Test",
                remember: false
            },
        ];
        localStorage.setItem('newLessons', JSON.stringify(lessons));
        outputString += `<div class="personalRememberBox">
                    <p>Du hast noch keine Kurse gebucht.</p>
                    </div>`;
    }
    else{
        for (let i = 0; i < lessons.length; i++) {

            if (lessons[i].remember == 'true') {
                switch (lessons[i].yogaArt) {
                    case '0':
                        outputString += `<div class="personalRememberBox">
                    <p>Hallo ${lessons[i].uName}, <br>
                    Du hast am ${lessons[i].day} um ${lessons[i].time} eine Yogaklasse der im Stil des Hatha Yogas gebucht! <br>
                        <br> Wir wünschen dir viel Spaß ;)</p>
                        <div onclick="goToTaskLoeschen(${i})" class="buttonToDeleteYogaClass">Löschen</div>
                    </div>`;
                        break;
                    case '1':
                        outputString += `<div class="personalRememberBox">
                    <p>Hallo ${lessons[i].uName}, <br>
                    Du hast am ${lessons[i].day} um ${lessons[i].time} eine Yogaklasse der im Stil des Anusara Yogas gebucht! <br>
                        <br> Wir wünschen dir viel Spaß ;)</p>
                        <div onclick="goToTaskLoeschen(${i})" class="buttonToDeleteYogaClass">Löschen</div>
                    </div>`;
                        break;
                    case '2':
                        outputString += `<div class="personalRememberBox">
                    <p>Hallo ${lessons[i].uName}, <br>
                    Du hast am ${lessons[i].day} um ${lessons[i].time} eine Yogaklasse der im Stil des Yin Yogas gebucht! <br>
                        <br> Wir wünschen dir viel Spaß ;)</p>
                        <div onclick="goToTaskLoeschen(${i})" class="buttonToDeleteYogaClass">Löschen</div>
                    </div>`;
                        break;
                    case '3':
                        outputString += `<div class="personalRememberBox">
                    <p>Hallo ${lessons[i].uName}, <br>
                    Du hast am ${lessons[i].day} um ${lessons[i].time} eine Yogaklasse der im Stil des Kundalini Yogas gebucht! <br>
                        <br> Wir wünschen dir viel Spaß ;)</p>
                        <div onclick="goToTaskLoeschen(${i})" class="buttonToDeleteYogaClass">Löschen</div>
                    </div>`;
                        break;
                    case '4':
                        outputString += `<div class="personalRememberBox">
                    <p>Hallo ${lessons[i].uName}, <br>
                    Du hast am ${lessons[i].day} um ${lessons[i].time} eine Yogaklasse der im Stil des Bikram Yogas gebucht! <br>
                        <br> Wir wünschen dir viel Spaß ;)</p>
                        <div onclick="goToTaskLoeschen(${i})" class="buttonToDeleteYogaClass">Löschen</div>
                    </div>`;
                        break;
                    default:
                        outputString += `<div class="personalRememberBox">
                    <p>Leider ist ein Fehler aufgetreten!</p>
                        <div onclick="goToTaskLoeschen(${i})" class="buttonToDeleteYogaClass">Löschen</div>
                    </div>`;
                }
            }

        }

    }
    if (outputString == "") {
        outputString += `<div class="personalRememberBox">
                    <p>Es gibt nichts woran Sie erinnert werden möchten.</p>
                    </div>`;
    }
    rememberBox.innerHTML = outputString;

}

generateRemember();


function goToTaskLoeschen(id) {
    taskLoeschenOverlay.style.display = 'block';
    taskLoeschenOverlay.innerHTML = `<h3>Möchtest du diesen Termin wirklich löschen?</h3>
        <div>
            <div class="chooseButton_IndexSide" id="chooseButton_IndexSide_nein" onclick="taskLoeschen(${id},0)">NEIN</div>
            <div class="chooseButton_IndexSide" onclick="taskLoeschen(${id}, 1)">JA</div>
        </div>
    `
    document.body.style.overflow = 'hidden';
}
function taskLoeschen(id, whatToDo) {
    let toPush = {
        yogaArt: -1,
        day: "TEST",
        time: -1,
        uName: "Test",
        remember: false
    }
    if (whatToDo == 1) {
        lessons.splice(id, 1);
        lessons.push(toPush);
    }

    document.body.style.overflow = 'auto';
    taskLoeschenOverlay.style.display = 'none';
    localStorage.setItem('newLessons', JSON.stringify(lessons));
    generateRemember();
}