/* The Lamplit Almanac — "On This Day" box. Shows an entry for today's date from a
   local, fact-checked list (at least two per month). Falls back gracefully: the full
   list is printed in the page HTML, so this only highlights today's entry. */
(function () {
  "use strict";
  // keyed by "MM-DD" ; all dates and events are long-settled and checked.
  var ENTRIES = {
    "01-01": { y: 1863, t: "The Emancipation Proclamation took effect, declaring enslaved people in Confederate states to be free." },
    "01-27": { y: 1888, t: "The National Geographic Society was founded in Washington, D.C." },
    "02-11": { y: 1847, t: "Inventor Thomas Edison was born in Milan, Ohio." },
    "02-14": { y: 1912, t: "Arizona was admitted as the 48th state of the Union." },
    "03-10": { y: 1876, t: "Alexander Graham Bell made the first successful telephone call." },
    "03-15": { y: -44, t: "Julius Caesar was assassinated in Rome — the famous Ides of March." },
    "04-15": { y: 1912, t: "The ocean liner Titanic sank in the North Atlantic after striking an iceberg." },
    "04-18": { y: 1775, t: "Paul Revere set out on his midnight ride to warn of approaching British troops." },
    "05-01": { y: 1931, t: "The Empire State Building opened in New York City." },
    "05-25": { y: 1961, t: "President John F. Kennedy set the national goal of landing a man on the Moon." },
    "06-06": { y: 1944, t: "Allied forces landed in Normandy on D-Day during the Second World War." },
    "06-15": { y: 1215, t: "King John of England sealed the Magna Carta, a cornerstone of modern liberty." },
    "07-04": { y: 1776, t: "The Second Continental Congress adopted the Declaration of Independence." },
    "07-20": { y: 1969, t: "Apollo 11 astronauts became the first people to walk on the Moon." },
    "08-18": { y: 1920, t: "The 19th Amendment was ratified, securing women's right to vote." },
    "08-28": { y: 1963, t: "Dr. Martin Luther King Jr. delivered his 'I Have a Dream' speech in Washington." },
    "09-09": { y: 1850, t: "California was admitted as the 31st state of the Union." },
    "09-17": { y: 1787, t: "The United States Constitution was signed in Philadelphia." },
    "10-01": { y: 1908, t: "The Ford Model T was introduced, bringing the automobile to ordinary families." },
    "10-24": { y: 1861, t: "The first transcontinental telegraph line was completed, linking the coasts." },
    "11-09": { y: 1989, t: "The Berlin Wall fell, beginning the reunification of Germany." },
    "11-19": { y: 1863, t: "President Lincoln delivered the Gettysburg Address." },
    "12-01": { y: 1955, t: "Rosa Parks refused to give up her bus seat in Montgomery, Alabama." },
    "12-17": { y: 1903, t: "The Wright brothers made the first powered airplane flight at Kitty Hawk." }
  };
  window.ALMANAC_ENTRIES = ENTRIES;

  var host = document.getElementById("on-this-day-today");
  if (!host) return;
  var d = new Date();
  var key = String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var label = months[d.getMonth()] + " " + d.getDate();
  var e = ENTRIES[key];
  if (e) {
    var year = e.y < 0 ? (Math.abs(e.y) + " BC") : e.y;
    host.innerHTML = '<p class="otd-entry"><span class="otd-date">' + label + ', ' + year + '</span><br>' + e.t + "</p>";
  } else {
    host.innerHTML = '<p class="otd-entry">There is no entry for <span class="otd-date">' + label +
      '</span> in our almanac yet. Browse the full year below — a new day always brings something worth remembering.</p>';
  }
})();
