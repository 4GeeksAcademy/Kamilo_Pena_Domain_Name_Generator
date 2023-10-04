/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "their", "her"];
  let adj = ["great", "big", "wonderful", "magic"];
  let noun = ["jogger", "racoon", "cat", "dog"];
  let hacks = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    let randomPronoun = pronoun[i];
    for (let a = 0; a < adj.length; a++) {
      let randomAdj = adj[a];
      for (let b = 0; b < noun.length; b++) {
        let randomNoun = noun[b];
        for (let c = 0; c < hacks.length; c++) {
          let randomHacks = hacks[i];
          console.log(randomPronoun, randomAdj, randomNoun, randomHacks);
        }
      }
    }
  }
};
