package com.Gestion.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Email;

@CrossOrigin("*")
@RestController
public class EmailRestService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	
	@PostMapping("/sendEmail")
	public String sendEmail(@RequestBody Email email) {
		 SimpleMailMessage message = new SimpleMailMessage(); 
		 	message.setTo(email.getTo()); 
	        message.setSubject(email.getMessageSubject()); 
	        message.setText(email.getMessageText());
	        javaMailSender.send(message);
	        return "Email sended";
	}
	
	@PostMapping("/sendEmailAttachment")
	public String sendEmailAttachment(@RequestBody Email email) throws MessagingException {
		System.out.println(email.getMessageSubject());
		MimeMessage message =javaMailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message,true);
		helper.setTo(email.getTo());  
		helper.setSubject(email.getMessageSubject()); 
		helper.setText(email.getMessageText());
		helper.setText(email.getMessageText(), true);
	        javaMailSender.send(message);
	        System.out.println("email sended");
	        return "Email   sended";
	}
	

}
