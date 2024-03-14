// Melakartha Ragas
const ragas = [
    "Kanakangi", "Ratnangi", "Ganamurti", "Vanascari", "Manavati", "Tanavari", "Senavati", "Hanumatodi", "Dhenuka", "Natakapriya", "Kokilapriya", "Rupavati", "Gayakapriya", "Vakulabharanam", "Mayamalavagaula", "Chakravakam", "Suryakantam", "Hatakambari", "Jhankaradhwani", "Natabhairavi", "Keeravani", "Kharaharapriya", "Gourimanohari", "Varunapriya", "Mararanjani", "Charukesi", "Saranganata", "Hemavati", "Dharmavati", "Naganandini", "Yagapriya", "Ragavardhini", "Gangeyabhusani", "Vagadheeswari", "Sulini", "Chalanata", "Salagam", "Jalarnavam", "Jhalavarali", "Navaneetam", "Pavani", "Raghupriya", "Gavambodhi", "Bhavapriya", "Subhapantuvarali", "Shadvidhamargini", "Suvarnangi", "Divyamani", "Dhavalambari", "Namanarayani", "Kamavardhani", "Ramapriya", "Gamakakriya", "Viswambhari", "Simsini", "Hamsanadam", "Dhenuka", "Natakapriya", "Kokilapriya", "Rupavati", "Gayakapriya", "Vakulabharanam", "Mayamalavagaula", "Chakravakam", "Suryakantam", "Hatakambari", "Jhankaradhwani", "Natabhairavi", "Keeravani", "Kharaharapriya", "Gourimanohari", "Varunapriya", "Mararanjani"
];

// Function to generate the list of ragas
function generateRagaList() {
    const ragaList = document.getElementById("ragaList");
    ragas.forEach(raga => {
        const li = document.createElement("li");
        li.textContent = raga;
        ragaList.appendChild(li);
    });
}

// Call the function to generate the list
generateRagaList();