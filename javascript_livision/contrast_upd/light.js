 
            function light() {

                  //common

                  document.body.style.backgroundColor = "white";
                  document.body.style.color = "black";
                  document.getElementById("topframe").style.backgroundColor = "white";
                  document.getElementById("topframe").style.color = "black";
                  document.getElementById("mainframe").style.color = "black";
                  document.getElementById("mainframe").style.backgroundColor = "white";

                  //topframe

                  let newsElements = document.getElementsByClassName("news");
                  for (let i = 0; i < newsElements.length; i++) {
                        newsElements[i].style.color = "black";
                        newsElements[i].style.backgroundColor = "white";
                  }
                  let parts1 = document.getElementsByClassName("partone");
                  for (let i = 0; i < parts1.length; i++) {
                        parts1[i].style.color = "black";
                        parts1[i].style.backgroundColor = "white";
                        parts1[i].style.borderColor = "black";
                  }
                  let parts2 = document.getElementsByClassName("parttwo");
                  for (let i = 0; i < parts2.length; i++) {
                        parts2[i].style.color = "black";
                        parts2[i].style.backgroundColor = "white";
                        parts2[i].style.borderColor = "black";
                  }
                  let parts3 = document.getElementsByClassName("partthree");
                  for (let i = 0; i < parts3.length; i++) {
                        parts3[i].style.color = "black";
                        parts3[i].style.backgroundColor = "white";
                        parts3[i].style.borderColor = "black";
                  }

                  //middle frame

                  let internationalNewsElements = document.getElementsByClassName("internationalnews");
                  for (let i = 0; i < internationalNewsElements.length; i++) {
                        internationalNewsElements[i].style.color = "black";
                        internationalNewsElements[i].style.backgroundColor = "white";
                        internationalNewsElements[i].style.borderColor = "black";
                  }
                  let nationalNewsElements = document.getElementsByClassName("nationalnews");
                  for (let i = 0; i < nationalNewsElements.length; i++) {
                       
 nationalNewsElements[i].style.color = "black";
                        nationalNewsElements[i].style.backgroundColor = "white";
                        nationalNewsElements[i].style.borderColor = "black";
                  }
                  let sportsNewsElements = document.getElementsByClassName("sportsnews");
                  for (let i = 0; i < sportsNewsElements.length; i++) {
                        sportsNewsElements[i].style.color = "black";
                        sportsNewsElements[i].style.backgroundColor = "white";
                        sportsNewsElements[i].style.borderColor = "black";
                  }
                  let entertainmentNewsElements = document.getElementsByClassName("entertainmentnews");
                  for (let i = 0; i < entertainmentNewsElements.length; i++) {
                        entertainmentNewsElements[i].style.color = "black";
                        entertainmentNewsElements[i].style.backgroundColor = "white";
                        entertainmentNewsElements[i].style.borderColor = "black";
                  }

                  // clock and network status

                  let clockElement = document.getElementById("clock");
                  clockElement.style.color = "black";
                  clockElement.style.backgroundColor = "white";

                  let networkStatusElement = document.getElementById("network-status");
                  networkStatusElement.style.color = "black";
                  networkStatusElement.style.backgroundColor = "white";


            }