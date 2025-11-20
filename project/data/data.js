const hatha = {
    name: "Hatha",
    infoText: "Hatha Yoga ist eine Yogarichtung, die bereits seit Tausenden von Jahren praktiziert wird. " +
        "Bis heute ist sie die meist verbreitete Yogaart weltweit. Beim Hatha Yoga werden Körperübungen, " +
        "die sogenannten Asanas, mit Atemübungen, auch Pranayama genannt, kombiniert.<br><br>" +
        "<span>Hatha</span> ist Wort aus dem Sanskrit, eine altindische Gelehrtensprache. Es bedeutet übersetzt " +
        "<span>Kraft</span>. Entsprechend stehen beim Hatha Yoga kräftigende Übungen im Fokus. In einer klassischen " +
        "Hatha Stunde wechselst du langsam zwischen einzelnen Posen und stimmst deine Atmung auf die kontrollierten " +
        "Bewegungen ab. Auf eine Phase der Anspannung folgt immer eine Sequenz der Entspannung. Ziel ist die körperliche " +
        "und mentale Ausgeglichenheit. Hatha Yoga soll dir Stabilität geben und dir helfen, deine Mitte zu finden.",
    bewertung: 5,
    imgLink: "./img/hathaYoga.jpg"
};
const anusara = {
    name: "Anusara",
    infoText: "Anusara Yoga ist eine moderne Form des Hatha Yoga, gegründet 1997 von John Friend. Es vereint präzise " +
        "Körperausrichtung mit einer positiven Philosophie, die auf tantrischen Überzeugungen basiert und das Göttliche " +
        "in allem feiert.<br><br>In Anusara steht die Verbindung von Einstellung, Ausrichtung und Aktion im Zentrum, " +
        "wodurch sowohl die körperlichen Übungen als auch spirituelle Aspekte hervorgehoben werden. Klassen sind " +
        "typischerweise herzlich und sowohl herausfordernd als auch unterstützend gestaltet. Nach persönlichen Skandalen " +
        "um den Gründer hat sich die Gemeinschaft neu organisiert und wird heute als eine Lehrer-geleitete Organisation " +
        "geführt. Anusara Yoga ist weltweit beliebt und passt für alle Erfahrungsstufen.",
    bewertung: 4,
    imgLink: "./img/anusaraYoga.jpg"
};

const yin = {
    name: "Yin",
    infoText: "Yin Yoga ist eine ruhige und meditative Yoga-Praxis, die in den 1970er Jahren entwickelt wurde, um das " +
        "tiefe Bindegewebe wie die Faszien, die Bänder und die Gelenke zu dehnen und zu stimulieren. Die Praxis besteht " +
        "hauptsächlich aus passiven Bodenhaltungen, die für längere Zeit gehalten werden, oft drei bis fünf Minuten oder " +
        "länger. Dieser Ansatz ermöglicht eine tiefe Entspannung der Muskeln und fördert die Freisetzung von Spannungen " +
        "sowohl im Körper als auch im Geist.<br><br>Yin Yoga betont die Stille und das innere Erleben und ist somit ein " +
        "perfekter Ausgleich zu den dynamischeren und muskulär ausgerichteten Yoga-Stilen, die in der westlichen Yoga-Praxis " +
        "vorherrschen. Es wird oft als therapeutische Ergänzung verwendet, um erhöhte Flexibilität und emotionales " +
        "Gleichgewicht zu fördern und ist besonders nützlich, um chronische Spannungen und Blockaden zu lösen. Yin Yoga " +
        "eignet sich für alle Erfahrungsstufen und kann als sanfte Einführung in die Meditation dienen oder als " +
        "tiefgreifende Praxis für erfahrene Yogis.",
    bewertung: 5,
    imgLink: "./img/yinYoga.png"
};

const kundalini = {
    name: "Kundalini",
    infoText: "Kundalini Yoga ist ein energetischer und spirituell fokussierter Yoga-Stil, der darauf abzielt, die " +
        "Kundalini-Energie, eine schlafende Kraft am unteren Ende der Wirbelsäule, zu erwecken. Diese Praxis kombiniert " +
        "körperliche Übungen, dynamische Atemtechniken, Meditation und das Singen von Mantras, um sowohl körperliches " +
        "Wohlbefinden als auch geistige Klarheit zu fördern.<br><br>Jede Übungsreihe, bekannt als Kriya, ist speziell " +
        "darauf ausgerichtet, bestimmte körperliche und geistige Aspekte zu stimulieren und zu balancieren. Kundalini " +
        "Yoga wird oft als \"Yoga des Bewusstseins\" bezeichnet, da es stark auf die Erweiterung des Selbstbewusstseins " +
        "und persönliche Entwicklung ausgerichtet ist. Die Praxis eignet sich für Menschen aller Erfahrungsstufen und " +
        "wird für ihre Fähigkeit geschätzt, tiefe innere Transformationen zu unterstützen.",
    bewertung: 3,
    imgLink: "./img/kundaliniYoga.jpg"
};

const bikram = {
    name: "Bikram",
    infoText: "Bikram Yoga ist eine intensive Form des Hatha Yoga, die in einem beheizten Raum bei etwa 40 Grad Celsius " +
        "praktiziert wird. Diese Yoga-Praxis besteht aus einer festgelegten Serie von 26 Haltungen und zwei Atemübungen, " +
        "die innerhalb von 90 Minuten durchgeführt werden. Die Hitze fördert die Dehnbarkeit der Muskeln, die Entgiftung " +
        "durch starkes Schwitzen und die Verbesserung der Durchblutung.<br><br>Bikram Yoga wurde in den 1970er Jahren von " +
        "Bikram Choudhury entwickelt und zielt darauf ab, sowohl die körperliche als auch die mentale Gesundheit zu " +
        "verbessern. Die festen Routinen bieten eine herausfordernde körperliche Betätigung, die Kraft, Flexibilität und " +
        "Ausdauer verbessert. Diese Praxis ist bekannt für ihre intensiven körperlichen Anforderungen und wird oft als " +
        "Mittel zur Gewichtsreduktion und zur Verbesserung der allgemeinen Fitness eingesetzt. Sie eignet sich für diejenigen, " +
        "die eine strukturierte und anstrengende Yoga-Erfahrung suchen.",
    bewertung: 4,
    imgLink: "./img/bikramYoga.jpg"
};

let allYogaElements = [
    hatha,
    anusara,
    yin,
    kundalini,
    bikram
];