// Configuração
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Altere apenas o código abaixo desta linha

  function returnContact(name){
    let contactIndex = (contacts.findIndex(contact => contact.firstName === name));
    return contactIndex;
  
  };
  let index = returnContact(name);
  if( index== -1){
    console.log("No such contact")
  }else{
   if(contacts[index].hasOwnProperty(prop)){
    console.log(contacts[index][prop])
   }else{
     console.log("No such property" )
   }
  }

  // Altere apenas o código acima desta linha
}

lookUpProfile("Akira", "jose");