let atemuebungenCircle = document.getElementById('circle');
let atemuebungenImgTag = document.getElementById('atemuebungenImgTag');
let breatheInText = document.getElementById('breatheIn');
let holdText = document.getElementById('hold');
let breatheOutText = document.getElementById('breatheOut');

let breatheIn = 3;
let hold = 3;
let breatheOut = 3;

function startUebung() {
    atemuebungenImgTag.src = "../img/playButtonOverlay.png";
    let cycle = 0;
    function breathCycle() {
        if (cycle >= 10){
            atemuebungenImgTag.src = "../img/playButton.png";
            atemuebungenImgTag.style.transition = `1s`;
            atemuebungenImgTag.style.width = '7vw';
            breatheInText.style.color = 'black';
            breatheInText.style.fontWeight = 'lighter'
            return;
        }
        // Ausatmen
        breatheInText.style.color = 'var(--black)';
        breatheInText.style.fontWeight = 'lighter'
        breatheOutText.style.color = 'var(--primary)';
        breatheOutText.style.fontWeight = 'bold'
        atemuebungenImgTag.style.transition = `${breatheOut}s`;
        atemuebungenImgTag.style.width = '5.5vw';
        setTimeout(() => {
            // Halten
            document.getElementById('circle').style.borderColor = 'var(--accent)';
            breatheOutText.style.color = 'var(--black)';
            breatheOutText.style.fontWeight = 'lighter'
            holdText.style.color = 'var(--primary)';
            holdText.style.fontWeight = 'bold'
            setTimeout(() => {
                // Einatmen
                document.getElementById('circle').style.borderColor = 'var(--secondary)'
                holdText.style.color = 'var(--black)';
                holdText.style.fontWeight = 'lighter'
                breatheInText.style.color = 'var(--primary)';
                breatheInText.style.fontWeight = 'bold'
                atemuebungenImgTag.style.transition = `${breatheIn}s`;
                atemuebungenImgTag.style.width = '10vw';
                setTimeout(() => {
                    cycle++;
                    breathCycle();
                }, breatheIn * 1000);
            }, hold * 1000);
        }, breatheOut * 1000);
    }
    breathCycle();
}

function newTimes(i ,h, o) {
    if (i == -1 && h == -1 && o == -1) {
        breatheIn = document.getElementById('customIn').value;
        hold = document.getElementById('customHold').value;
        breatheOut = document.getElementById('customOut').value;
        if (breatheIn === "" || breatheIn < 0 ) {
            breatheIn = 3;
        }
        if (hold === "" || hold < 0 ) {
            hold = 3;
        }
        if (breatheOut === "" || breatheOut < 0 ) {
            breatheOut = 3;
        }

    } else {
        breatheIn = i;
        hold = h;
        breatheOut = o;
    }
    document.getElementById('breatheOut').innerHTML = `Breathe out: ${breatheOut}s`;
    document.getElementById('hold').innerHTML = `Hold: ${hold}s`;
    document.getElementById('breatheIn').innerHTML = `Breathe in: ${breatheIn}s`;


}