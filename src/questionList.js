const questionList = [
    {
      text: "Korak 1. Odaberite proizvođača vašeg vozila",
      multipleChoice: false,
      answers: [
        { answer: "Peugeot" },
        { answer: "Volkswagen" },
        { answer: "Citroen" },
        { answer: "BMW" },
        { answer: "Seat" },
        { answer: "Alfa Romeo" },
        { answer: "Kia" },
        { answer: "Hyundai" },
        { answer: "Honda" },
        { answer: "Toyota" },
      ],
    },
    {
      text: "Korak 2. Odaberite jednu ili više usluga za koje ste",
      multipleChoice: true,
      answers: [
        { answer: "Zamjena ulja i filtera" , price: 500 },
        { answer: "Promjena pakni", price: 450 },
        { answer: "Promjena guma", price: 100 },
        { answer: "Servis klima uređaja", price: 299 },
        { answer: "Balansiranje guma", price: 50},
        { answer: "Zamjena ulja u kočnicama", price: 229 }
      ],
    },
  ];

  export default questionList