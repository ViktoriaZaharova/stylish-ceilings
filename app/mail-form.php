<?php
header("Content-type: text/html;charset=utf-8");

$recepient = "test@gmail.com"; // введите свой email
$sitename = "Стильные потолки";

$phone = trim($_POST["phone"]);

$message = "Телефон: $phone";

$subject = "Заявка с сайта \"$sitename\"";


mail($recepient, $subject, $message, "From: $recepient\nReply-To: secondnick@yourmail.ru\nContent-type:text/plain; Charset=utf-8\r\n");
