<?php
header("Content-type: text/html;charset=utf-8");

$recepient = "cpdninfo@gmail.com"; // введите свой email
$sitename = "Стильные потолки";

$phone = trim($_POST["phone"]);

$radio_1 = trim($_POST["radio_1"]);
$radio_2 = trim($_POST["radio_2"]);
$radio_3 = trim($_POST["radio_3"]);
$radio_4 = trim($_POST["radio_4"]);
$radio_5 = trim($_POST["radio_5"]);

$message = "Телефон: $phone \nВыберите тип полотна: $radio_1 \nВыберите тип полотна: $radio_2 \nВыберите тип полотна: $radio_3 \nВыберите тип полотна: $radio_4 \nВыберите тип полотна: $radio_5";

$subject = "Заявка с сайта \"$sitename\"";


mail($recepient, $subject, $message, "From: $recepient\nReply-To: secondnick@yourmail.ru\nContent-type:text/plain; Charset=utf-8\r\n");
