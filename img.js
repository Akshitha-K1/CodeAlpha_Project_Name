var pimg=document.getElementById("pimg");
                    var boximg=document.getElementById("boximg");
                    function openbox(pic){
                        boximg.style.display="flex";
                        pimg.src=pic;
                    }
                    function closebox(pic){
                        boximg.style.display="none";
                    }