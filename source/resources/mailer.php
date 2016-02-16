<?php

$ok =  "ok";
$error = "error";


$mailto = 'market-panda@mail.ru'; //адреса получателя через ',' 

//$mailto = 'dima-mav@yandex.ru'; //адреса получателя через ',' 

$subject = "Запрос с сайта prof-split.ru";



if (isset($_POST['phone']))
{
	$msg = "Получен запрос с сайта prof-split.ru\n" .
			"Имя: " . $_POST['name'] . "\n" .
			"Телефон: ".$_POST['phone'] . "\n" .
			"Сообщение: " . $_POST['question'] . "\n\n\n" .
			"Отправлено с формы: " . $_POST['formid'];
	if (mail($mailto, $subject, $msg))
	{
		echo $ok;
	} else
	{
		echo $error;
	}
}