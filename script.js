let contentElement = document.getElementById('contentContainer');


let jsonDatabase = [
  {
    "sign" : "Aries - The Ram",
    "dates" : "March 21 - April 19",
    "constellation" : "ariesc.jpg",
    "symbol" : "ariess.jpg",
    "bg_color" : "rgb(300,81,80)",
    "font_color" : "rgb(115,0,1)",
    "description" : "Aries is a fire sign, usually associated with the power color red. Aries are generally known to be bold, courageous, and adventurous, giving the sign qualities fit for a leader, and the start of the Zodiac cycle. Aries are also known to be very energetic and aggressive. They're honest with their emotions, and not ones to hold a grudge. Aries have a fiery personality that they're always willing to share with the world around them."
  },
  {
    "sign" : "Taurus - The Bull",
    "dates" : "April 20 - May 20",
    "constellation" : "taurusc.jpg",
    "symbol" : "tauruss.jpg",
    "bg_color" : "rgb(143,184,127)",
    "font_color" : "rgb(29,51,37)",
    "description" : "Taurus is an earth sign, usually associated with the power color green. Tauruses are known to be loyal and resistant to change. This may make them seem lazy at first, but they are actually very hardworking people who value security and stability. Tauruses are also generally romantics, who seek long term relationships. Overall, they are warm and dependable people who are comforting to be around."
  },
  {
    "sign" : "Gemini - The Twins",
    "dates" : "May 21 - June 21",
    "constellation" : "geminic.jpg",
    "symbol" : "geminis.jpg",
    "bg_color" : "rgb(237,215,92)",
    "font_color" : "rgb(199,123,57)",
    "description" : "Gemini is an air sign, usually associated with the power color yellow. Geminis are known to be quick-witted and naturally curious people. Because they want to learn about the world around them, they are gifted in communicating with others. However, as they are represented by 'the twins', Geminis tend to have two sides to their personality -- one that they show to the world, and one that they keep hidden."
  },
  {
    "sign" : "Cancer - The Crab",
    "dates" : "June 22 - July 22",
    "constellation" : "cancerc.jpg",
    "symbol" : "cancers.jpg",
    "bg_color" : "rgb(192,191,193)",
    "font_color" : "rgb(67,67,67)",
    "description" : "Cancer is a water sign, usually associated with the power color silver. Cancers are known to be sensitive and in touch with their emotions, which can make them seem moody and temperamental. However, they are just heavily impacted by the people and situations that surround them. Cancers generally value their family and home, as they need a safe space to recharge their batteries. Like a crab, they usually have a tough exterior, but once you get past it, there's a soft side of them waiting."
  },
   {
    "sign" : "Leo - The Lion",
    "dates" : "July 23 - August 22",
    "constellation" : "leoc.jpg",
    "symbol" : "leos.jpg",
    "bg_color" : "rgb(223,154,91)",
    "font_color" : "rgb(127,72,24)",
    "description" : "Leo is a fire sign, usually associated with the power color orange. Leos are known to be artistic and enthusiastic. Like the sun, they have a fire inside of them which they express through their creativity.They tend to have an innate confidence that can make them seem a little arrogant. However, Leos are actually very loyal and generous to those they chose to open up to."
  },
   {
    "sign" : "Virgo - The Maiden",
    "dates" : "August 23 - September 22",
    "constellation" : "virgoc.jpg",
    "symbol" : "virgos.jpg",
    "bg_color" : "rgb(156,126,100)",
    "font_color" : "rgb(43,35,24)",
    "description" : "Virgo is an earth sign, usually associated with the power color brown. Virgos are generally known to be hardworking and analytical. They value order and productivity, often to the point of perfection. Virgos are natural-born organizers, who can find it frustrating when things don't go to plan. However, Virgos are ultimately kind, grounded, and trustworthy people -- perfect to lean on for help."
  },
   {
    "sign" : "Libra - The Balance",
    "dates" : "September 23 - October 23",
    "constellation" : "librac.jpg",
    "symbol" : "libras.jpg",
    "bg_color" : "rgb(225,182,181)",
    "font_color" : "rgb(96,0,41)",
    "description" : "Libra is an air sign, usually associated with the power color pale pink. Represented by a balance, Libras are known to be social and diplomatic, valuing peace and balance above all. They are also naturally gifted in communication, which makes them great negotiators. Libras are deeply sensitive people. However, they process their feelings intellectually, and rarely act on them, as they will do anything to avoid conflict."
  },
   {
    "sign" : "Scorpio - The Scorpion",
    "dates" : "October 24 - November 21",
    "constellation" : "scorpioc.jpg",
    "symbol" : "scorpios.jpg",
    "bg_color" : "rgb(40,40,40)",
    "font_color" : "rgb(151,155,159)",
    "description" : "Scorpio is a water sign, usually associated with the power color black. Scorpios are known to be intense and passionate. They are 'all or nothing' kinds of people, which often leads them to be rather stubborn. Scorpios are deeply emotional, and generally crave intimate relationships. Once they set their sights on something, they're nearly impossible to stop."
  },
   {
    "sign" : "Sagittarius - The Archer",
    "dates" : "November 22 - December 21",
    "constellation" : "sagittariusc.jpg",
    "symbol" : "sagittariuss.jpg",
    "bg_color" : "rgb(179,166,227)",
    "font_color" : "rgb(60,10,58)",
    "description" : "Sagittarius is a fire sign, usually associated with the power color purple. Sagittariuses are known to be adventurous, spontaneous, and optimistic, which leads them to crave exploration. They tend to seek out new experiences in order to learn more about themselves and the world around them. However, this quality may make it difficult for this sign to focus or commit to one thing. Sagittariuses value freedom above all."
  },
   {
    "sign" : "Capricorn - The Goat",
    "dates" : "December 22 - January 19",
    "constellation" : "capricornc.jpg",
    "symbol" : "capricorns.jpg",
    "bg_color" : "rgb(100,103,100)",
    "font_color" : "rgb(33,33,33)",
    "description" : "Capricorn is an earth sign, usually associated with the power color dark gray. Capricorns are known to be ambitious and patient. They set their goals for success, and don't mind working hard to create a life with a stable foundation. Capricorns are disciplined and determined, which can lead them to seem less emotional than others as they don't want to be distracted by feelings. Despite this however, Capricorns are still gifted in connecting with others."
  },
   {
    "sign" : "Aquarius - The Water Bearer",
    "dates" : "January 20 - February 18",
    "constellation" : "aquariusc.jpg",
    "symbol" : "aquariuss.jpg",
    "bg_color" : "rgb(142,182,223)",
    "font_color" : "rgb(15,29,81)",
    "description" : "Aquarius is an air sign, usually associated with the power color blue. Aquariuses are known to be intellectual, independent, and contemplative. They are very focused on their own beliefs and ideas, and once they establish them, they usually will not waver. This can make them seem unique and eccentric, as they aren't afraid to express hidden sides of themselves. Aquariuses are always eager to learn more about the world around them, which leads them to be especially social."
  },
   {
    "sign" : "Pisces - The Fish",
    "dates" : "February 19 - March 20",
    "constellation" : "piscesc.jpg",
    "symbol" : "piscess.jpg",
    "bg_color" : "rgb(174,216,188)",
    "font_color" : "rgb(35,58,44)",
    "description" : "Pisces is a water sign, usually associated with the power color light green. Pisces are generally known to be imaginative and emotional. They are deeply compassionate and sensitive, and have a high sense of empathy which often leads others to rely on them. Because they have a lot on their plate, Pisces can commonly become overwhelmed, which can cause others to see them as gentle or emotional. However, Pisces are actually very strong, and will never hesitate to recreate themselves and leave behind whatever is holding them back."
  },
];


for (let i = 0; i < jsonDatabase.length; i++) {
  createContentElement(jsonDatabase[i]);
}
// AOS.init(); (wouldn't work)


function createContentElement(incomingJSON) {

  let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON['bg_color'];
    newContentElement.style.color = incomingJSON['font_color']
    newContentElement.classList.add('contentItem');
    // newContentElement.setAttribute("data-aos","fade-down") (wouldn't work)

  let words = document.createElement("DIV");
    newContentElement.appendChild(words);
    words.classList.add('words');

    let zodiacName = document.createElement("H3");
      zodiacName.innerText = incomingJSON['sign'];
      words.appendChild(zodiacName);

    let zodiacDates = document.createElement("H4");
      zodiacDates.innerText = incomingJSON['dates'];
      words.appendChild(zodiacDates);

    let zodiacDescription = document.createElement("p");
      zodiacDescription.innerText = incomingJSON['description']
      words.appendChild(zodiacDescription);

  let images = document.createElement("DIV");
    newContentElement.appendChild(images);
    images.classList.add('images');

    let newImage = document.createElement("IMG");
      newImage.src = incomingJSON['constellation'];
      images.appendChild(newImage);

    let newImage2 = document.createElement("IMG");
      newImage2.src = incomingJSON['symbol'];
      images.appendChild(newImage2);


contentElement.appendChild(newContentElement);
}