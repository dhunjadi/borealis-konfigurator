const questionList = [
    {
      text: "Korak 1. Odaberite proizvođača vašeg vozila",
      answerType: "singlechoice",
      answers: [
        { id: "1", answer: "Peugeot" },
        { id: "2", answer: "Volkswagen" },
        { id: "3", answer: "Citroen" },
        { id: "4", answer: "BMW" },
        { id: "5", answer: "Seat" },
        { id: "6", answer: "Alfa Romeo" },
        { id: "7", answer: "Kia" },
        { id: "8", answer: "Hyundai" },
        { id: "9", answer: "Honda" },
        { id: "10", answer: "Toyota" },
      ],
    },
    {
      text: "Korak 2. Odaberite jednu ili više usluga za koje ste",
      answerType: "multiplechoice",
      answers: [
        { id: "11", answer: "Zamjena ulja i filtera" , price: "500" },
        { id: "12", answer: "Promjena pakni", price: "450" },
        { id: "13", answer: "Promjena guma", price: "100" },
        { id: "14", answer: "Servis klima uređaja", price: "299" },
        { id: "15", answer: "Balansiranje guma", price: "50" },
        { id: "16", answer: "Zamjena ulja u kočnicama", price: "229" }
      ],
    },
    {
      text: "Korak 3. Vaši kontakt podaci",
      answerType: "text",
      answers: [
        { id:'' , inputName:'' , name: '', placeholder:''},

      ],
      
    },
  ];

  export default questionList