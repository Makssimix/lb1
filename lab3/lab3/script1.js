function changeBackgroundColor() {
            // Генерируем случайный цвет
            var randomColor = getRandomColor();

            // Устанавливаем цвет фона страницы
            document.body.style.backgroundColor = randomColor;
        }

        function getRandomColor() {
            // Генерируем случайный цвет в формате HEX
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }