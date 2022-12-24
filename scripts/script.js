      
        function typing() {

            var i = 0;
            var txt = 'The lord of destruction is back....'; 
            /* The text */
            var speed = 60; /* The speed/duration of the effect in milliseconds */
            
            function typeWriter() {
                if (i < txt.length) {
                document.getElementById("demo-1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
                }}  typeWriter() 

                typing1()
            }




        function typing1() {  
    
            var app = document.getElementById('app');

            var typewriter = new Typewriter(app, {
                loop: true
            });
            
            typewriter.typeString('The lord is coming..')
                .pauseFor(2500)
                .deleteAll()
                .typeString('The death is close to us...')
                .pauseFor(2500)
                .deleteChars(7)
                .typeString('<strong>The war is now</strong>')
                .pauseFor(2500)
                .start();
            }  







