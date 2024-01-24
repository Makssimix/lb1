<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["vote"])) {
            $choice = $_POST["vote"];
            $file = fopen("results.txt", "a");
            fwrite($file, $choice."\n");
            fclose($file);
        }
    }
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>results</title>
</head>
<body>
    <?php 
        $choiceshistory = nl2br(file_get_contents('results.txt'));
        echo($choiceshistory);
    ?>
</body>
</html>
