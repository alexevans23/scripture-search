const quotesBySubject = {
    prophetic_testimony: [
      "“I started to read the Book of Mormon before I was old enough to be a deacon, and I have been reading it ever since, and I know that it is true. It seems to me that any member of this Church would never be satisfied until he or she had read the Book of Mormon time and time again, and thoroughly considered it so that he or she could bear witness that it is in very deed a record with the inspiration of the Almighty upon it, and that its history is true. -Joseph Fielding Smith",
      "It is a tangible thing that can be handled, that can be read, that can be tested. It carries within its covers a promise of its divine origin. Millions now have put it to the test and found it to be a true and sacred record. -Gordon B Hinckley",
      "Reading the book was the beginning of my light. It was the source of my first spiritual certainty that God lives, that He is my Heavenly Father, and that a plan of happiness was outlined in eternity for me. It led me to love the Holy Bible and the other standard works of the Church. It taught me to love the Lord Jesus Christ, to glimpse His merciful compassion, and to consider the grace and grandeur of His atoning sacrifice. - Jeffrey R. Holland",
      "I know the role the Book of Mormon has played in the message of the Restoration. I understand how urgent it was for heaven to get it into the Prophet Joseph’s hands. I understand what it will yet mean in preparing the way for Christ to come, to rule and reign as Lord of Lords and King of Kings. It is a witness, it is a declaration from cover to cover, from title page to final verse, that Jesus is the Christ and that the gospel has been restored. -Jeffrey R. Holland"
    ],
    spiritual_blessings: [
      "There is a power in the book which will begin to flow into your lives the moment you begin a serious study of the book. You will find greater power to resist temptation. You will find the power to avoid deception. You will find the power to stay on the strait and narrow path. The scriptures are called “the words of life” (D&C 84:85), and nowhere is that more true than it is of the Book of Mormon. When you begin to hunger and thirst after those words, you will find life in greater and greater abundance. -Ezra Taft Benson",
    ],
    patience: [
      "Throughout my life, I have gained spiritual strength from the phrase “we heeded them not” (1 Nephi 8:33). In 1 Nephi some who are making their way to the tree of life don’t heed the mocking voices. Fingers of scorn are pointed at them, but they don’t falter. They don’t listen. Likewise, we hear many loud, tempting voices today. Sometimes it can be a real struggle not to heed those voices, but Lehi shows that it is possible. -Melissa Heaton",
      "I found the Lord Jesus Christ within the covers of the Book of Mormon as a 19-year-old missionary, walking through the rain and the mud of England, riding a bike with mud clear up the back of my coat and over the top of my head, tracting in cities that had never been opened, with baptisms that did not come for a long time. Those nights I went back to No. 3 Gilmore Road and read and read and wept. I knew that Jesus was the Christ, that the Book of Mormon was true, that the gospel had been restored. If the folks in England didn’t understand that, then I would just keep knocking on their doors until they did. -Jeffrey R. Holland",
      "I don’t know whether we Church members fully appreciate the Book of Mormon, one of our sacred scriptures, as we really should. One of the clearest explanations of why we need patience to endure the trials of life is set forth by Nephi in these striking words: “For it must needs be, that there is an opposition in all things. If not so, … righteousness could not be brought to pass, neither wickedness, neither holiness nor misery, neither good nor bad. Wherefore, all things must needs be a compound in one. -Joseph B. Wirthlin",
      "",
      ""
    ],
    charity: [
      "These promises—increased love and harmony in the home, greater respect between parent and child, increased spirituality and righteousness—are not idle promises, but exactly what the Prophet Joseph Smith meant when he said the Book of Mormon will help us draw nearer to God. -Ezra Taft Benson",
      "If we are truly disciples of the Lord Jesus Christ, we will reach out with love and understanding to all of our neighbors at all times. -M. Russell Ballard"
    ],
    peace: [
        "Many years ago I stood at the bedside of a young father as he hovered between life and death. His distraught wife and their two children stood nearby. He took my hand in his and, with a pleading look, said, “Bishop, I know I am about to die. Tell me what happens to my spirit when I do.” I offered a silent prayer for heavenly guidance and noticed on his bedside table a copy of the triple combination. I reached for the book and fanned the pages. Suddenly I discovered that I had, with no effort on my part, stopped at the 40th chapter of Alma in the Book of Mormon... As I continued to read about the Resurrection, a glow came to the young man’s face and a smile graced his lips. -Thomas S Monson",
        "I’d heard members of the Church who attended the English class say that the scriptures had solutions to problems. So when I encountered personal challenges or problems, I pulled the Book of Mormon off the shelf and began to read. Invariably, I found answers—the kind of answers that told me exactly what I needed to know. -Olga Ovcharenko",
        "As I read these words, the Holy Ghost filled the room. I felt that my Heavenly Father knew the news I had received that day. I felt that the words the prophet Jacob had written more than 2,000 years before were written to me for that day and came directly from the Savior. He knew the pain and sadness I felt after hearing that our daughter would die. And He was there to comfort our family with His promise that He had prepared a way and that one day, through the power of the Resurrection, “in our bodies we shall see God.” Amanda lived for almost another year, but I have never forgotten that day when the words of the Book of Mormon spoke to me in my need and the Lord gave me hope, comfort, and understanding of His plan. -Gina Baird",
        "Life has its share of fears and failures. Sometimes things fall short. Sometimes people fail us, economies fail us, businesses or governments fail us. But the message of the Book of Mormon is that the one thing in time and eternity that will not fail us is the pure love of the Lord Jesus Christ as manifest in His Atoning sacrifice. - Jeffrey R. Holland",
        "The message of the Book of Mormon is that Christ does not fail us. His salvation will not fail, His ordinances will not fail, His Church will not fail. This is the dispensation of the fullness of times. The restored gospel will never be taken from the face of the earth again. That is the message of the Book of Mormon. -Jeffrey R. Holland"
    ],
    miracles: [
        "For my New Year’s resolution, I committed myself to read the Book of Mormon with Mama Wong. Whenever she said her eyes hurt, I said, “You can just listen.” When she said she needed to do the dishes, I followed her to the kitchen and kept reading out loud. It turns out that Mama Wong listened closely and remembered what I read. Over time, she chose to read on her own. Later she told me that an ordinary man could not have written the Book of Mormon. She had no doubt that the book is the word of God. For me, seeing her go from being uninterested to wanting to read and bear testimony of the Book of Mormon is a miracle. -Annie Wong"
    ],
    author: [
        ""
    ]
  };
  
  // Define a function to get a random quote for a given subject
  function getRandomQuote(subject) {
    const quotes = quotesBySubject[subject];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Find the form element and attach a "submit" event listener to it
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    // Get the selected subject from the dropdown menu
    const quoteSubject = document.querySelector("#quoteSubject");
    const subject = quoteSubject.value.toLowerCase();
  
    // Get a random quote for the selected subject
    const quote = getRandomQuote(subject);
  
    // Display the quote on the page
    const quoteDisplay = document.querySelector("#quoteDisplay");
    quoteDisplay.textContent = quote;
  });