 function dark() {

                  //common

                  document.body.style.backgroundColor = "white";
                  document.body.style.color = "white";
                  document.getElementById("topframe").style.backgroundimage = "in3";
                  document.getElementById("topframe").style.color = "white";
                  document.getElementById("mainframe").style.backgroundColor = "black";
                  document.getElementById("mainframe").style.color = "white";
                  let newsElements = document.getElementsByClassName("news");
                  for (let i = 0; i < newsElements.length; i++) {
                        newsElements[i].style.color = "white";
                        newsElements[i].style.backgroundColor = "black";
                        newsElements[i].style.borderColor = "white";
                  }


                  //topframe 

                  let parts1 = document.getElementsByClassName("partone");
                  for (let i = 0; i < parts1.length; i++) {
                        parts1[i].style.color = "white";
                        parts1[i].style.backgroundColor = "black";
                        parts1[i].style.borderColor = "white";
                  }
                  let parts2 = document.getElementsByClassName("parttwo");
                  for (let i = 0; i < parts2.length; i++) {
                        parts2[i].style.color = "white";
                        parts2[i].style.backgroundColor = "black";
                        parts2[i].style.borderColor = "white";
                  }
                  let parts3 = document.getElementsByClassName("partthree");
                  for (let i = 0; i < parts3.length; i++) {
                        parts3[i].style.color = "white";
                        parts3[i].style.backgroundColor = "black";
                        parts3[i].style.borderColor = "white";
                  }

                  // main frame

                  let internationalNewsElements = document.getElementsByClassName("internationalnews");
                  for (let i = 0; i < internationalNewsElements.length; i++) {
                        internationalNewsElements[i].style.color = "white";
                        internationalNewsElements[i].style.backgroundColor = "black";
                        internationalNewsElements[i].style.borderColor = "white";
                  }
                  let nationalNewsElements = document.getElementsByClassName("nationalnews");
                  for (let i = 0; i < nationalNewsElements.length; i++) {
                        nationalNewsElements[i].style.color = "white";
                        nationalNewsElements[i].style.backgroundColor = "black";
                        nationalNewsElements[i].style.borderColor = "white";
                  }
                  let sportsNewsElements = document.getElementsByClassName("sportsnews");
                  for (let i = 0; i < sportsNewsElements.length; i++) {
                        sportsNewsElements[i].style.color = "white";
                        sportsNewsElements[i].style.backgroundColor = "black";
                        sportsNewsElements[i].style.borderColor = "white";
                  }
                  let entertainmentNewsElements = document.getElementsByClassName("entertainmentnews");
                  for (let i = 0; i < entertainmentNewsElements.length; i++) {
                        entertainmentNewsElements[i].style.color = "white";
                        entertainmentNewsElements[i].style.backgroundColor = "black";
                        entertainmentNewsElements[i].style.borderColor = "white";
                  }

                  // clock and network status

                  let clockElement = document.getElementById("clock");
                  clockElement.style.color = "white";
                  clockElement.style.backgroundColor = "black";   

                  let net = document.getElementById("network-status");
                  net.style.color = "white";
                  net.style.backgroundColor = "black";      

            }
            