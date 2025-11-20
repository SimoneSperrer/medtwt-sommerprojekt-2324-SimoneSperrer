//localStorage.setItem('testKey', 'testValue');
//alert(localStorage.getItem('testKey'));
let yogaID;
let booking_content = document.getElementById('booking_content');
let radioButtonsWeekdays = document.querySelectorAll('input[name="weekday"]');
let radioButtonsTimes = document.querySelectorAll('input[name="time"]');
let radioButtonsRemember;
let booking_detailOverlay = document.getElementById('booking_detailOverlay');
let uNameInputField;
let counter = 0;
let selectedTimeValue;
let selectedDayValue;
let alert = document.getElementById('alert');


let newLessonTest = {
    yogaArt: -1,
    day: "TEST",
    time: -1,
    uName: "Test",
    remember: true
}

let lessons = JSON.parse(localStorage.getItem('newLessons'));
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
    ]
    localStorage.setItem('newLessons', JSON.stringify(lessons));
}

generateHtml();
function generateHtml() {
    yogaID = sessionStorage['yogaID'];
    let outputString = `<div class="container">
        <div class="booking_infoText">
            <p>${allYogaElements[yogaID].infoText}</p>
        </div>
        <div class="booking_stars">
            <h4>Bewertung:</h4>
            <div class="yogaBox_stars">
                <div class="star" id="${allYogaElements[yogaID].name}YogaStar1">.</div>
                <div class="star" id="${allYogaElements[yogaID].name}YogaStar2">.</div>
                <div class="star" id="${allYogaElements[yogaID].name}YogaStar3">.</div>
                <div class="star" id="${allYogaElements[yogaID].name}YogaStar4">.</div>
                <div class="star" id="${allYogaElements[yogaID].name}YogaStar5">.</div>
            </div>
        </div>
        <div class="booking_bookALesson">.</div>
        <div class="booking_bewertung">
            <h4>Bewerte deine <span>Erfahrungen</span>:</h4>
            <p>Falls du diesen Kurs bereits ausprobiert hast,
                würden wir uns freuen, wenn du uns eine kleine Bewertung
                mit Feedback hinterlassen könntest! <3</p>
        </div>
        <div class="booking_bewertungsBox">
            <textarea id="text" name="text" cols="110" rows="20"></textarea>
        </div>
        <div class="booking_chooseDay">
            <h3>Wähle den <span>Wochentag</span>:</h3>
            <div class="align_radios_booking_choose">
                <input type="radio" class="radios_booking_choose" id="montag" name="weekday" value="Montag">
                <label class="radios_booking_choose" for="montag">Montag</label><br>

                <input type="radio" class="radios_booking_choose" id="dienstag" name="weekday" value="Dienstag">
                <label class="radios_booking_choose" for="dienstag">Dienstag</label><br>

                <input type="radio" class="radios_booking_choose" id="freitag" name="weekday" value="Freitag">
                <label class="radios_booking_choose" for="freitag">Freitag</label><br>

                <input type="radio" class="radios_booking_choose" id="samstag" name="weekday" value="Samstag">
                <label class="radios_booking_choose" for="samstag">Samstag</label>
            </div>

        </div>
        <div class="booking_chooseTime">
            <h3>Wähle die <span>Uhrzeit</span>:</h3>
            <div class="align_radios_booking_choose">
                <input type="radio" class="radios_booking_choose" id="time9" name="time" value="9:00">
                <label class="radios_booking_choose" for="time9">9:00</label><br>

                <input type="radio" class="radios_booking_choose" id="time11" name="time" value="11:00">
                <label class="radios_booking_choose" for="dienstag">11:00</label><br>

                <input type="radio" class="radios_booking_choose" id="time14" name="time" value="14:00">
                <label class="radios_booking_choose" for="time14">14:00</label><br>

                <input type="radio" class="radios_booking_choose" id="time17" name="time" value="17:00">
                <label class="radios_booking_choose" for="time17">17:00</label>
            </div>
        </div>
        <div onclick="goTo_submitALesson()" class="booking_commitNewLesson">Buchen</div>
        <div class="booking_commitBewertung">Senden</div>
        <div id="booking_detailOverlay"></div>

    </div>`;
    document.getElementById('header').innerHTML = `<h1><span>${allYogaElements[yogaID].name}</span>Yoga</h1>`;
    booking_content.innerHTML = outputString;
    generateStars(allYogaElements[yogaID].bewertung, allYogaElements[yogaID].name);

}
function generateStars(anzahl, id) {
    for (let i = 0; i < 5; i++) {
        if (anzahl == i) {
            document.getElementById(`${id}YogaStar${i+1}`).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
            anzahl++;
        }
    }
}

function goTo_submitALesson() {
    let weekdayIsSelected = false;
    let timeIsSelected = false;
    let outputString = ``;



    let selectedWeekRadio = document.querySelector('input[name="weekday"]:checked');
    let selectedTimeRadio = document.querySelector('input[name="time"]:checked');

    if (selectedWeekRadio) {
        selectedDayValue = selectedWeekRadio.value;
        weekdayIsSelected = true;
    }
    if (selectedTimeRadio) {
        selectedTimeValue = selectedTimeRadio.value;
        timeIsSelected = true;
    }
    if (weekdayIsSelected && timeIsSelected) {
        document.body.style.overflow = 'hidden';
        booking_detailOverlay.style.display = 'flex';
        outputString = `<div id="booking_detailOverlay_detailBox">
                <div>
                    <label for="userName"><h3>Gib deinen <span>Namen</span> hier ein:</h3></label>
                    <input type="text" name="userName" id="uName">
                </div>
                <div>
                    <h3>Möchtest du an den Termin <span>errinert</span> werden?</h3>
                </div>
                <div>
                    <input type="radio" class="radios_booking_remember" id="ja" name="remember" value="true">
                    <label class="radios_booking_remember" for="ja">Ja Bitte <3</label><br>
                </div>
                <div>
                    <input type="radio" class="radios_booking_remember" id="nein" name="remember" value="false">
                    <label class="radios_booking_remember" for="nein">Nein Danke :(</label><br>
                </div>
                <div>
                    <button onclick="submitALesson(0)" id="booking_detailOverlay_detailBox_SubmitButton" type="submit">Fertig</button>
                </div>
            </div>`;
    } else {
        document.body.style.overflow = 'hidden';
        booking_detailOverlay.style.display = 'flex';
        outputString = `<div id="booking_detailOverlay_detailBox">
                <div>
                    <h3>Wähle eine <span>Uhrzeit</span> und einen <span>Wochentag</span> aus!!</h3>
                </div>
                <div>
                    <button onclick="submitALesson(1)" id="booking_detailOverlay_detailBox_SubmitButton" type="submit">Verstanden</button>
                </div>
            </div>`
    }
    booking_detailOverlay.innerHTML = outputString;
    uNameInputField = document.getElementById('uName');
    radioButtonsRemember = document.querySelectorAll('input[name="remember"]');
}
function submitALesson(whatToDo) {
    let gotFilledIn;
    let selectedRememberValue;

    if (whatToDo == 0) {
        let rememberIsSelected = false;
        let outputString = ``;
        let selectedUNameValue = uNameInputField.value;


        let selectedRememberRadio = document.querySelector('input[name="remember"]:checked');

        if (selectedRememberRadio) {
            selectedRememberValue = selectedRememberRadio.value;
            rememberIsSelected = true;
        }




        if ((selectedUNameValue != "") && (rememberIsSelected)) {
            let newLesson = {
                yogaArt: yogaID,
                day: selectedDayValue,
                time: selectedTimeValue,
                uName: selectedUNameValue,
                remember: selectedRememberValue
            }

            gotFilledIn = false;
            lessons = JSON.parse(localStorage['newLessons'])
            for (let i = 0; i <lessons.length ; i++) {
                if (lessons[i].yogaArt < 0) {
                    lessons[i] = newLesson;
                    gotFilledIn = true;
                    break;
                }
            }
            if (gotFilledIn) {
                localStorage.setItem('newLessons', JSON.stringify(lessons));
            } else {
                alert.style.display = 'flex';
                alert.innerHTML = `<p>Du hast deine maximale Anzahl an Kursen erreicht.</p>`;
            }

            document.body.style.overflow = 'auto';
            booking_detailOverlay.style.display = 'none';
        } else {
            alert.style.display = 'flex'
            alert.innerHTML = `<p>Gib deinen Namen ein und entscheide dich.</p>`;

        }
    }
    if (whatToDo == 1) {
        document.body.style.overflow = 'auto';
        booking_detailOverlay.style.display = 'none';
    }

}

function checkDisplay() {
    let toSmall = document.getElementById('toSmall');
    if (innerWidth < 1150) {
        toSmall.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        toSmall.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

}
window.addEventListener('resize', checkDisplay);
checkDisplay();
function remove() {
    alert.style.display = 'none';
}