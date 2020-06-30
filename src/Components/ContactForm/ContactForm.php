<?php 
  $name = $_POST['nameValue'];
  $email = $_POST['emailValue'];
  $message = $_POST['textValue'];
  $formcontent="From: $name \n Message: $message";
  $recipient = "contact@philippniestroj.com";
  $subject = "Contact Form";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  
  header("Location: https://philippniestroj.com");
  die();  
?>