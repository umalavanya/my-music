// Melakartha Ragas

const chakra1 = ["Kanakangi", "Ratnangi", "Ganamurti", "Vanaspati", "Manavati", "Tanarupi"] ;
const chakra2 = [ "Senavati", "Hanumatodi", "Dhenuka", "Natakapriya", "Kokilapriya", "Rupavati"] ;
const chakra3 = ["Gayakapriya", "Vakulabharanam", "Mayamalavagowla", "Chakravakam","Suryakantam", "Hatakambari"] ;
const chakra4 = ["Jhankaradhvani", "Natabhairavi", "Keeravani", "Kharaharapriya", "Gourimanohari","Varunapriya"] ;
const chakra5 = ["Mararanjani", "Charukesi", "Saranganata", "Hemavati", "Dharmavati", "Naganandini"] ;
const chakra6 = ["Yagapriya","Ragavardhini", "Gangeyabhusani", "Vagadheeswari", "Sulini", "Chalanata",] ;

const chakra7 = ["Salagam", "Jalarnavam", "Jhalavarali","Navaneetam", "Pavani", "Raghupriya"] ;
const chakra8 = ["Gavambodhi", "Bhavapriya", "Subhapantuvarali", "Shadvidhamargini","Suvarnangi", "Divyamani"] ;

const chakra9 = ["Dhavalambari", "Namanarayani", "Kamavardhani", "Ramapriya", "Gamakakriya", "Viswambhari"] ;
const chakra10 = ["Simsini", "Hamsanadam", "Dhenuka", "Natakapriya", "Kokilapriya", "Rupavati"] ;

const chakra11 = [] ;
const chakra12 = [] ;


const ragas = [
    
      
    ,  
    , , , 
      
    ,  
    , , 
    , "Gayakapriya", "Vakulabharanam", 
    "Mayamalavagaula", "Chakravakam", "Suryakantam", "Hatakambari", "Jhankaradhvani", "Natabhairavi", "Keeravani", 
    "Kharaharapriya", "Gourimanohari", "Varunapriya", "Mararanjani"
];

// Function to generate the table of ragas
function generateRagaTable() {
    const ragaTableBody = document.querySelector("#ragaTable tbody");

    ragas.forEach((raga, index) => {
        const row = document.createElement("tr");

        const indexCell = document.createElement("td");
        indexCell.textContent = index + 1;
        row.appendChild(indexCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = raga;
        row.appendChild(nameCell);

        ragaTableBody.appendChild(row);
    });
}

// Call the function to generate the table
generateRagaTable();
