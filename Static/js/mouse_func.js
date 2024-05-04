document.addEventListener('DOMContentLoaded', function() {
            var coordinatesElement = document.getElementById('coordinates');
            document.addEventListener('mousemove', function(event) {
                var x = event.clientX;
                var y = event.clientY;
                coordinatesElement.textContent = 'Mouse Coordinates: (' + x + ', ' + y + ')';
            });

            var ws = new WebSocket('ws://localhost:8000/ws/mouse_data/');
            ws.onopen = function() {
                console.log('WebSocket connection established.');
            };
            ws.onmessage = function(event) {
                console.log('Message received:', event.data);
            };
            document.addEventListener('click', function(event) {
                if (event.button === 0) {  // Left mouse button
                    var x = event.clientX;
                    var y = event.clientY;
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    ctx.drawImage(document.body, 0, 0, canvas.width, canvas.height);
                    var imageData = canvas.toDataURL('image/png');
                    ws.send(JSON.stringify({
                        event: 'left_click',
                        x: x,
                        y: y,
                        image: imageData
                    }));
                }
            });
        });
